"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "./layout/Layout";
import Instructions from "./components/Instructions";
import GameStats from "./components/GameStats";
import GameCompleted from "./components/GameCompleted";
import RankingTable from "./components/RankingTable";

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

  const playAgain = () => {
    generateCards();
  };

  const exitGame = () => {
    setGameStarted(false);
    setPlayerName("");
    setCards([]);
    setIsRunning(false);
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
  }, [matchedCount, totalPairs, ranking, playerName, timer, attempts]);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🧠 Memorama App
        </h1>

        {!gameStarted ? (
          <Instructions
            onStartGame={startGame}
            playerName={playerName}
            setPlayerName={setPlayerName}
          />
        ) : (
          <>
            <GameStats
              playerName={playerName}
              timer={timer}
              attempts={attempts}
              onExit={exitGame}
            />

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center">
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`
                    cursor-pointer aspect-square bg-white rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl
                    ${selected.includes(idx) ? "ring-4 ring-blue-400" : ""}
                    ${card.matched ? "ring-4 ring-green-400" : ""}
                  `}
                  onClick={() => handleCardClick(idx)}
                  style={{ width: "120px", height: "120px" }}
                >
                  <Image
                    src={
                      card.matched || selected.includes(idx)
                        ? card.image
                        : "/images/contraportada.png"
                    }
                    alt="card"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            {matchedCount === totalPairs && (
              <GameCompleted
                timer={timer}
                attempts={attempts}
                onPlayAgain={playAgain}
              />
            )}

            <RankingTable ranking={ranking} />
          </>
        )}
      </div>
    </Layout>
  );
}
