import React from "react";
import Navbar from "../components/Navbar";

const integrantes = [
  "Danna Paola Alcocer Sánchez",
  "Denisse Duran Renteria",
  "Zuri Saday Silva Miranda",
  "Mariana Bautista Salinas",
  "Dulce María Hernández Padilla",
];

export default function AcercaDePage() {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-[#eaf6fb] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 md:p-12 max-w-2xl w-full text-center border-2 border-[#169dd9] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#169dd9] mb-6">
            Integrantes del equipo
          </h1>

          <ul className="space-y-3 mb-8 text-lg text-[#333]">
            {integrantes.map((nombre, index) => (
              <li
                key={index}
                className="hover:text-[#f49920] transition font-medium"
              >
                {nombre}
              </li>
            ))}
          </ul>

          <div className="border-t border-[#169dd9] pt-6">
            <p className="text-sm text-[#169dd9] mb-2">Desarrollado por:</p>
            <ul className="flex flex-col gap-1 items-center">
              <li className="text-lg font-semibold text-[#f49920]">Kevin Luciano</li>
              <li className="text-lg font-semibold text-[#f49920]">Cassandra Cambray</li>
              <li className="text-lg font-semibold text-[#f49920]">Miguel Luna</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
