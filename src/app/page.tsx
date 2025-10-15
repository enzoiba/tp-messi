import Image from "next/image";
import messi from "/messi.jpg";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <h2 className="bg-black">Bienvenido a la página de Lionel Messi</h2>
      <p>
        Conocé la historia, los logros y las características del mejor jugador del mundo.
      </p>
      <Image
        src="/messi.webp"
        alt="Messi"
        width={400}
        height={400}
        
      />
    </div>
  );
}
