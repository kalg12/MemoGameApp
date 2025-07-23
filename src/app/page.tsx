"use client";

import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";

type Card = {
  id: number;
  image: string;
  matched: boolean;
};

type RankingEntry = {
  name: string;
  time: number;
  attempts: number;
};

export default function Home() {
  const totalPairs = 12;
  const allImages = Array.from(
    { length: totalPairs },
    (_, i) => `/images/${i + 1}.png`
  );
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const storedRanking = localStorage.getItem("memoramaRanking");
    if (storedRanking) {
      setRanking(JSON.parse(storedRanking));
    }
  }, []);

  const generateCards = () => {
    const duplicated = [...allImages, ...allImages];
    const shuffled = duplicated
      .map((img, index) => ({ id: index, image: img, matched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelected([]);
    setMatchedCount(0);
    setAttempts(0);
    setTimer(0);
    setIsRunning(true);
  };

  const startGame = () => {
    if (playerName.trim() === "") return;
    generateCards();
    setGameStarted(true);
  };

  const handleCardClick = (index: number) => {
    if (
      selected.length === 2 ||
      cards[index].matched ||
      selected.includes(index)
    )
      return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setAttempts((prev) => prev + 1);
      const [firstIdx, secondIdx] = newSelected;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.image === secondCard.image) {
        const updatedCards = cards.map((card, idx) =>
          idx === firstIdx || idx === secondIdx
            ? { ...card, matched: true }
            : card
        );
        setCards(updatedCards);
        setMatchedCount((prev) => prev + 1);
        setSelected([]);
      } else {
        setTimeout(() => {
          setSelected([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCount === totalPairs) {
      setIsRunning(false);
      const newRanking = [
        ...ranking,
        { name: playerName, time: timer, attempts },
      ];
      newRanking.sort((a, b) =>
        a.time === b.time ? a.attempts - b.attempts : a.time - b.time
      );
      setRanking(newRanking);
      localStorage.setItem("memoramaRanking", JSON.stringify(newRanking));
    }
  }, [matchedCount]);

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <Layout>
      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">App Memorama</h1>

        {!gameStarted ? (
          <div className="text-center space-y-4">
            <p className="text-lg max-w-xl mx-auto text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sed consequat libero, eget tincidunt nibh. Aenean lacinia, nunc et
              suscipit bibendum, metus sem commodo purus, vitae laoreet turpis
              lectus ut magna.
            </p>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="border rounded px-4 py-2 w-64 text-center"
            />
            <br />
            <button
              onClick={startGame}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Jugar
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-4 text-lg">
              <p>👤 {playerName}</p>
              <p>⏱️ Tiempo: {formatTime(timer)}</p>
              <p>❌ Intentos: {attempts}</p>
              <button
                onClick={() => {
                  setGameStarted(false);
                  setPlayerName("");
                  setCards([]);
                  setIsRunning(false);
                }}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Salir
              </button>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  className="cursor-pointer aspect-square bg-gray-200 rounded shadow-md"
                  onClick={() => handleCardClick(idx)}
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={
                      card.matched || selected.includes(idx)
                        ? card.image
                        : "/images/contraportada.png"
                    }
                    alt="card"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>

            {matchedCount === totalPairs && (
              <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  ¡Juego terminado!
                </h2>
                <p>🎉 Tiempo final: {formatTime(timer)}</p>
                <p>🎯 Intentos: {attempts}</p>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-2">🏆 Ranking</h2>
              <ul className="space-y-1">
                {ranking.slice(0, 5).map((entry, i) => (
                  <li key={i} className="bg-white p-2 rounded shadow text-sm">
                    #{i + 1} - {entry.name} - Tiempo: {formatTime(entry.time)},
                    Intentos: {entry.attempts}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
