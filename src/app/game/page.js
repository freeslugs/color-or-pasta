"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import colors from './colors'; 
import pasta from './pasta'; 

const GamePage = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    selectRandomWord();
  }, []);

  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length + pasta.length));
    if (randomIndex < colors.length) {
      setCurrentWord(colors[randomIndex]);
    } else {
      setCurrentWord(pasta[randomIndex - colors.length]);
    }
  };

  const guess = (selection) => {
    if (
      (colors.includes(currentWord) && selection === 'color') ||
      (pasta.includes(currentWord) && selection === 'pasta')
    ) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
    }
    selectRandomWord();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen" >
      {/* header */}
      <div className="flex flex-col justify-between w-full sm:flex-row">
        <div className="relative">
          <img src="/images/current-score.png" alt="Current Score" className="w-[300px] object-contain mb-4 sm:mb-0 sm:mr-4" />
          <p className="absolute bottom-8 sm:bottom-6 left-60 sm:right-14 text-4xl score">{currentScore}</p>
        </div>

        <div className="relative">
          <img src="/images/high-score.png" alt="High Score" className="w-[300px] object-contain " />
          <p className="absolute bottom-7 left-60 sm:right-14 text-4xl score">{currentScore}</p>
        </div>
      </div>

      {/* word section */}
      <div className="flex flex-col items-center justify-center flex-grow flex grow">  
        <h1 className="text-8xl current-word">{currentWord}</h1>
      </div>

      {/* bottom selectors */}
      <div className="flex justify-center">
        <button onClick={() => guess('pasta')}>
          <img src="/images/pasta-brown.png" alt="Pasta Brown" className="w-[150px] object-contain sm:w-[300px]"  />
        </button>
        <img src="/images/or.png" alt="Or" className="w-[50px] object-contain sm:w-[100px]" />
        <button onClick={() => guess('color')}>
          <img src="/images/color.png" alt="Color" className="w-[150px] object-contain sm:w-[300px]" />
        </button>
      </div>
    </div>
  );
};

export default GamePage;
