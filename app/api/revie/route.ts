import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const PRODUCTS_FILE = path.join(DATA_DIR, "products.json");
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

async function ensureFiles() {
  await fs.promises.mkdir(DATA_DIR, { recursive: true });
  await fs.promises.mkdir(UPLOADS_DIR, { recursive: true });
  if (!fs.existsSync(PRODUCTS_FILE)) await fs.promises.writeFile(PRODUCTS_FILE, JSON.stringify([]));
  if (!fs.existsSync(REVIEWS_FILE)) await fs.promises.writeFile(REVIEWS_FILE, JSON.stringify([]));
}

export async function GET(req: Request) {
  await ensureFiles();
  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  if (type === "products") {
    const data = JSON.parse(await fs.promises.readFile(PRODUCTS_FILE, "utf8") || "[]");
    return NextResponse.json(data);
  }
  if (type === "reviews") {
    const data = JSON.parse(await fs.promises.readFile(REVIEWS_FILE, "utf8") || "[]");
    return NextResponse.json(data);
  }
  const products = JSON.parse(await fs.promises.readFile(PRODUCTS_FILE, "utf8") || "[]");
  const reviews = JSON.parse(await fs.promises.readFile(REVIEWS_FILE, "utf8") || "[]");
  return NextResponse.json({ products, reviews });
}

export async function POST(req: Request) {
  const body = await req.json();
  await ensureFiles();

  if (body.type === "product") {
    const { name, description, imageBase64 } = body;
    let imagePath = null;
    if (imageBase64) {
      const matches = imageBase64.match(/^data:(.+);base64,(.+)$/);
      const mime = matches?.[1] ?? "image/png";
      const data = matches?.[2] ?? imageBase64;
      const ext = mime.split("/")[1] ?? "png";
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const filePath = path.join(UPLOADS_DIR, fileName);
      await fs.promises.writeFile(filePath, Buffer.from(data, "base64"));
      imagePath = `/uploads/${fileName}`;
    }
    const products = JSON.parse(await fs.promises.readFile(PRODUCTS_FILE, "utf8") || "[]");
    const newProduct = { id: Date.now(), name, description, image: imagePath };
    products.unshift(newProduct);
    await fs.promises.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    return NextResponse.json(newProduct);
  }

  if (body.type === "review") {
    const { productId, name, message, rating } = body;
    const reviews = JSON.parse(await fs.promises.readFile(REVIEWS_FILE, "utf8") || "[]");
    const newReview = { id: Date.now(), productId, name, message, rating, createdAt: new Date().toISOString() };
    reviews.unshift(newReview);
    await fs.promises.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
    return NextResponse.json(newReview);
  }

  return NextResponse.json({ error: "invalid type" }, { status: 400 });
}
