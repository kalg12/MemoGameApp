"use client";

import React from "react";

type RankingEntry = {
  name: string;
  time: number;
  attempts: number;
};

interface RankingTableProps {
  ranking: RankingEntry[];
}

export default function RankingTable({ ranking }: RankingTableProps) {
  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "🏅";
    }
  };

  const clearRanking = () => {
    localStorage.removeItem("memoramaRanking");
    window.location.reload();
  };

  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto max-w-2xl mx-auto">
        <div className="bg-[#169dd9] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
            <span>🏆</span>
            <span>Ranking de Jugadores</span>
          </h2>
          <button
            onClick={clearRanking}
            className="bg-[#f49920] hover:bg-[#d9821b] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md"
          >
            Limpiar Ranking
          </button>
        </div>
        <div className="p-4">
          {ranking.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🎯</div>
              <p>¡Sé el primero en aparecer en el ranking!</p>
            </div>
          ) : (
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="py-2 px-2 text-[#169dd9]">#</th>
                  <th className="py-2 px-2 text-[#169dd9]">Jugador</th>
                  <th className="py-2 px-2 text-[#169dd9]">Intentos</th>
                  <th className="py-2 px-2 text-[#169dd9]">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {ranking.slice(0, 10).map((entry, i) => (
                  <tr
                    key={i}
                    className={
                      i === 0
                        ? "bg-[#f9e79f] font-bold"
                        : i === 1
                        ? "bg-[#e5e8e8] font-semibold"
                        : i === 2
                        ? "bg-[#f5cba7] font-medium"
                        : "bg-[#f8f9f9]"
                    }
                  >
                    <td className="py-2 px-2 text-2xl">{getMedalIcon(i)}</td>
                    <td className="py-2 px-2 text-[#333]">{entry.name}</td>
                    <td className="py-2 px-2 text-[#169dd9]">{entry.attempts}</td>
                    <td className="py-2 px-2 text-[#f49920]">{formatTime(entry.time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
