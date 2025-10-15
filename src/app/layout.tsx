import "./globals.css";


export const metadata = {
  title: "Leo Messi - Sitio Oficial de Fans",
  description: "Información, logros y más sobre Lionel Messi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="">
        <header className="">
          <h1>Leo Messi</h1>
          <nav className="">
            <a href="/">Inicio</a>
            <a href="/caracteristicas">Características</a>
            <a href="/historia">Historia</a>
            <a href="/logros">Logros</a>
          </nav>
        </header>

        <main className="flex">{children}</main>

        <footer className="">
          &copy; 2025 Fans de Lionel Messi
        </footer>
      </body>
    </html>
  );
}

  
