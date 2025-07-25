"use client";

import React from "react";

interface GameCompletedProps {
  timer: number;
  attempts: number;
  onPlayAgain: () => void;
}

export default function GameCompleted({
  timer,
  attempts,
  onPlayAgain,
}: GameCompletedProps) {
  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="mt-8 text-center">
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 rounded-xl shadow-2xl max-w-md mx-auto">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-4">¡Felicitaciones!</h2>
        <p className="text-lg mb-2">Has completado el memorama</p>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{formatTime(timer)}</div>
              <div className="text-sm opacity-90">Tiempo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{attempts}</div>
              <div className="text-sm opacity-90">Intentos</div>
            </div>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md"
        >
          🎮 Jugar de Nuevo
        </button>
      </div>
    </div>
  );
}
