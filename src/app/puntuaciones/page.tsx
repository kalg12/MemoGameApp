"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface RankingEntry {
  name: string;
  attempts: number;
  time: number;
}

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function PuntuacionesPage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("memoramaRanking");
    if (stored) {
      try {
        setRanking(JSON.parse(stored));
      } catch {
        setRanking([]);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="h-screen bg-[#eaf6fb] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 md:p-12 max-w-2xl w-full text-center border-2 border-[#169dd9] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#169dd9] mb-6">Puntuaciones</h1>
          {ranking.length === 0 ? (
            <p className="text-[#f49920] text-lg">No hay puntuaciones registradas aún.</p>
          ) : (
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-[#169dd9] pb-2">Jugador</th>
                  <th className="text-[#169dd9] pb-2">Intentos</th>
                  <th className="text-[#169dd9] pb-2">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((score, idx) => (
                  <tr key={idx} className="border-t border-[#eaf6fb] hover:bg-[#f49920] hover:bg-opacity-10 transition">
                    <td className="py-2 font-medium text-[#333]">{score.name}</td>
                    <td className="py-2 text-[#169dd9]">{score.attempts}</td>
                    <td className="py-2 text-[#f49920]">{formatTime(score.time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
