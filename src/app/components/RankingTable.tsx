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

  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
          <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center space-x-2">
            <span>🏆</span>
            <span>Tabla de Rankings</span>
          </h2>
        </div>

        <div className="p-4">
          {ranking.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🎯</div>
              <p>¡Sé el primero en aparecer en el ranking!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {ranking.slice(0, 10).map((entry, i) => (
                <div
                  key={i}
                  className={`
                    flex items-center justify-between p-3 rounded-lg transition-all
                    ${
                      i < 3
                        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400"
                        : "bg-gray-50 hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getMedalIcon(i)}</span>
                    <div>
                      <div className="font-semibold text-gray-800">
                        #{i + 1} - {entry.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Tiempo: {formatTime(entry.time)} • Intentos:{" "}
                        {entry.attempts}
                      </div>
                    </div>
                  </div>

                  {i < 3 && (
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {i === 0
                          ? "Campeón"
                          : i === 1
                          ? "Subcampeón"
                          : "Tercer lugar"}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
