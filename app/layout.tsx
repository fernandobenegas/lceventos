import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <ParticlesBackground />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}