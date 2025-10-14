import Image from "next/image";
import messi from "../public/messi.jpg";

export default function HomePage() {
  return (
    <div className="home">
      <h2>Bienvenido a la página de Lionel Messi</h2>
      <p>
        Conocé la historia, los logros y las características del mejor jugador del mundo.
      </p>
      <Image
        src={messi}
        alt="Messi"
        width={400}
        height={400}
        className="messi-img"
      />
    </div>
  );
}
