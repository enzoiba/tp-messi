import Image from "next/image";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
          Bienvenido a la página de Lionel Messi
        </h2>
        <p className="max-w-xl text-lg mb-6">
          Conocé la historia, los logros y las características del mejor jugador del mundo.
        </p>
        <Image
          src="/messi.webp"
          alt="Lionel Messi"
          width={400}
          height={400}
          className="rounded-2xl shadow-2xl border-4 border-blue-200"
        />
      </main>

      <Footer />
    </div>
  );
}

