"use client";

import React from "react";

interface GameStatsProps {
  playerName: string;
  timer: number;
  attempts: number;
  onExit: () => void;
}

export default function GameStats({
  playerName,
  timer,
  attempts,
  onExit,
}: GameStatsProps) {
  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👤</span>
            <span className="font-semibold text-lg">{playerName}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl">⏱️</span>
            <span className="font-mono text-lg">{formatTime(timer)}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold text-lg">{attempts} intentos</span>
          </div>
        </div>

        <button
          onClick={onExit}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
        >
          🚪 Salir
        </button>
      </div>
    </div>
  );
}
