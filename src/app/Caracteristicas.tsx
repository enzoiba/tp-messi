import React from 'react'

const Caracteristicas = () => {
  return (
    <div>
 
  const caracteristicas = [
    { titulo: "Regate", texto: "Su control del balón es incomparable, capaz de dejar rivales atrás con simples movimientos." },
    { titulo: "Visión de juego", texto: "Anticipa las jugadas antes que todos, convirtiéndose en un creador nato." },
    { titulo: "Definición", texto: "Letal frente al arco, tanto de zurda como con la derecha o de cabeza." },
    { titulo: "Liderazgo", texto: "Guía a su equipo con ejemplo y talento, sin necesidad de palabras." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white text-gray-800">
   

      <main className="flex flex-col items-center flex-grow py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Características de Lionel Messi</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caracteristicas.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{c.titulo}</h3>
              <p className="text-gray-700">{c.texto}</p>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
}

    </div>
  )
}

export default Caracteristicas
