import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Leo Messi - Sitio Oficial de Fans",
  description: "Información, historia y logros de Lionel Messi",
};

export default function RootLayout({ 
 children,
  }: Readonly<{ 
  children: React.ReactNode;
 }>) { 
  return (
    <html lang="es">
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  );
}
