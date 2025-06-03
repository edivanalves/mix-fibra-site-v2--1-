import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow">
          Bem-vindo à <span className="text-blue-500">Mix Fibra</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Internet rápida, confiável e feita para você navegar sem limites.
        </p>
        <a
          href="#planos"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          Conheça nossos planos
        </a>
      </div>
    </div>
  );
}
import './styles/custom.css';
export default App;