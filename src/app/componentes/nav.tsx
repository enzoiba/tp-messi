import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-wrap justify-center gap-6 text-lg">
      <Link href="/" className="nav-link hover:text-yellow-300 transition-colors">
        Inicio
      </Link>
      <Link href="/caracteristicas" className="nav-link hover:text-yellow-300 transition-colors">
        Características
      </Link>
      <Link href="/historia" className="nav-link hover:text-yellow-300 transition-colors">
        Historia
      </Link>
      <Link href="/logros" className="nav-link hover:text-yellow-300 transition-colors">
        Logros
      </Link>
    </nav>
  );
}

