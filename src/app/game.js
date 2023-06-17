import React from 'react';

const GamePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full">
        <img src="/high-score.png" alt="High Score" className="score-img" />
        <img src="/current-score.png" alt="Current Score" className="score-img" />
      </div>
      <h1 className="text-4xl font-bold">Word</h1>
      <div className="flex justify-center">
        <img src="/pasta-brown.png" alt="Pasta Brown" className="game-img" />
        <img src="/or.png" alt="Or" className="game-img" />
        <img src="/color.png" alt="Color" className="game-img" />
      </div>
    </div>
  );
};

export default GamePage;
