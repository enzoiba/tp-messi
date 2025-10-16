import Nav from "./nav.tsx";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-5 shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-wide mb-2">Leo Messi</h1>
        
      </div>
      <Nav />
    </header>
  );
}

