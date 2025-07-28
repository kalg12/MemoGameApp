"use client";

import React from "react";

interface InstructionsProps {
  onStartGame: () => void;
  playerName: string;
  setPlayerName: (name: string) => void;
}

export default function Instructions({
  onStartGame,
  playerName,
  setPlayerName,
}: InstructionsProps) {
  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto">
      {/* Título principal */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#169dd9] mb-4">
          ¡Bienvenido al Memorama!
        </h2>
        <p className="text-lg text-gray-700">
          Un juego de memoria que desafía tu concentración y habilidades cognitivas
        </p>
      </div>

      {/* Instrucciones del juego */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-2xl font-semibold text-[#169dd9] mb-4 text-center">
          📋 Instrucciones del Juego
        </h3>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="bg-[#169dd9] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              1
            </span>
            <div>
              <h4 className="font-semibold text-[#f49920]">Preparación:</h4>
              <p className="text-gray-700">
                Las 24 cartas están colocadas boca abajo en el área de juego,
                formando una cuadrícula ordenada.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-[#f49920] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              2
            </span>
            <div>
              <h4 className="font-semibold text-[#169dd9]">Cómo jugar:</h4>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Voltea dos cartas en tu turno</li>
                <li>
                  Si ambas cartas muestran el mismo elemento, ¡encontraste un par!
                </li>
                <li>
                  Si coinciden, las cartas se quedan volteadas y puedes continuar
                </li>
                <li>Si no coinciden, se voltean boca abajo nuevamente</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-[#169dd9] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              3
            </span>
            <div>
              <h4 className="font-semibold text-[#f49920]">Objetivo:</h4>
              <p className="text-gray-700">
                Encuentra todos los pares en el menor tiempo posible y con la menor cantidad de intentos. ¡Tu puntuación se guardará en el ranking!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consejos */}
      <div className="bg-[#f49920] bg-opacity-10 p-4 rounded-lg">
        <h4 className="font-semibold text-[#169dd9] mb-2">💡 Consejos:</h4>
        <ul className="text-sm text-white list-disc list-inside space-y-1">
          <li>Observa y memoriza las posiciones de las cartas</li>
          <li>Concéntrate y toma tu tiempo para recordar</li>
          <li>¡La práctica hace al maestro!</li>
        </ul>
      </div>

      {/* Input del nombre y botón de inicio */}
      <div className="space-y-4">
        <div>
        <label className="block text-[#169dd9] font-medium mb-2">
          Ingresa tu nombre para comenzar:
        </label>
        <input
          type="text"
          placeholder="Escribe tu nombre aquí..."
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="border-2 border-[#169dd9] rounded-lg px-4 py-3 w-80 text-center text-lg focus:outline-none focus:border-[#f49920] focus:ring-2 focus:ring-[#f49920] transition-all"
          maxLength={20}
        />
        </div>

        <button
          onClick={onStartGame}
          disabled={playerName.trim() === ""}
          className={`
            px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all transform shadow-lg
            ${
              playerName.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#169dd9] hover:bg-[#f49920] hover:scale-105"
            }
          `}
        >
          🎮 ¡Comenzar a Jugar!
        </button>
      </div>
    </div>
  );
}
