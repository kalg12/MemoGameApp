// src/app/integrantes/page.tsx

import React from "react";

const page = () => {
  const integrantes = [
    "Danna Paola Alcocer Sánchez",
    "Denisse Duran Renteria",
    "Zuri Saday Silva Miranda",
    "Mariana Bautista Salinas",
    "Dulce María Hernández Padilla",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          Integrantes del equipo
        </h1>

        <ul className="space-y-3 mb-8 text-lg text-gray-700">
          {integrantes.map((nombre, index) => (
            <li key={index} className="hover:text-purple-900 transition">
              {nombre}
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-600">Desarrollado por:</p>
          <p className="text-lg font-semibold text-purple-800">Kevin Luciano</p>
        </div>
      </div>
    </div>
  );
};

export default page;
