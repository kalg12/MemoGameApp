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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Bienvenido al Memorama!
        </h2>
        <p className="text-lg text-gray-600">
          Un juego de memoria que desafía tu concentración y habilidades
          cognitivas
        </p>
      </div>

      {/* Instrucciones del juego */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          📋 Instrucciones del Juego
        </h3>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              1
            </span>
            <div>
              <h4 className="font-semibold text-gray-800">Preparación:</h4>
              <p className="text-gray-600">
                Las 24 cartas están colocadas boca abajo en el área de juego,
                formando una cuadrícula ordenada.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              2
            </span>
            <div>
              <h4 className="font-semibold text-gray-800">Cómo jugar:</h4>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Voltea dos cartas en tu turno</li>
                <li>
                  Si ambas cartas muestran el mismo elemento, ¡encontraste un
                  par!
                </li>
                <li>
                  Si coinciden, las cartas se quedan volteadas y puedes
                  continuar
                </li>
                <li>Si no coinciden, se voltean boca abajo nuevamente</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              3
            </span>
            <div>
              <h4 className="font-semibold text-gray-800">Objetivo:</h4>
              <p className="text-gray-600">
                Encuentra todos los pares en el menor tiempo posible y con la
                menor cantidad de intentos. ¡Tu puntuación se guardará en el
                ranking!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consejos */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">💡 Consejos:</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Observa y memoriza las posiciones de las cartas</li>
          <li>Concéntrate y toma tu tiempo para recordar</li>
          <li>¡La práctica hace al maestro!</li>
        </ul>
      </div>

      {/* Input del nombre y botón de inicio */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingresa tu nombre para comenzar:
          </label>
          <input
            type="text"
            placeholder="Escribe tu nombre aquí..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-3 w-80 text-center text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            maxLength={20}
          />
        </div>

        <button
          onClick={onStartGame}
          disabled={playerName.trim() === ""}
          className={`
            px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all transform
            ${
              playerName.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105 shadow-lg"
            }
          `}
        >
          🎮 ¡Comenzar a Jugar!
        </button>
      </div>
    </div>
  );
}
