"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import { audiowide, cabinsketch } from "../fonts"

import colors from './colors'; 
import pasta from './pasta'; 

const GamePage = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [isPasta, setIsPasta] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    selectRandomWord();
    retrieveHighScore();
  }, []);

  useEffect(() => {
    saveHighScore();
  }, [currentScore]);

  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length + pasta.length));
    if (randomIndex < colors.length) {
      setCurrentWord(colors[randomIndex]);
    } else {
      setCurrentWord(pasta[randomIndex - colors.length]);
    }
  };

  const guess = (selection) => {
    setAnswer(selection);
    setIsPasta(pasta.includes(currentWord));

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

  const retrieveHighScore = () => {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }

  const saveHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('highScore', currentScore.toString());
    }
  }

  return (
    <div className="flex flex-col items-center justify-between mobile-container" >
      {/* header */}
      <div className="flex flex-col justify-between w-full sm:flex-row">
        <div className="relative">
          <img src="/images/current-score.png" alt="Current Score" className="w-[300px] object-contain mb-4 sm:mb-0 sm:mr-4" />
          <p className={`absolute bottom-8 sm:bottom-6 left-60 sm:right-14 text-4xl ${audiowide.className}`}>{currentScore}</p>
        </div>

        <div className="relative">
          <img src="/images/high-score.png" alt="High Score" className="w-[300px] object-contain" />
          <p className={`absolute bottom-7 left-60 sm:right-14 text-4xl score ${audiowide.className}`}>{highScore}</p>
        </div>
      </div>

      {/* word section */}
      <div className="flex flex-col items-center justify-center flex-grow flex grow">  
        <h1 className={`text-8xl ${cabinsketch.className}`}>{currentWord}</h1>
      </div>

      {/* bottom selectors */}
      <div className="flex justify-center">
        <button onClick={() => guess('pasta')}>
          <div className="relative">
            <img src="/images/pasta-brown.png" alt="Pasta Brown" className="w-[150px] object-contain sm:w-[300px]" />
            {answer == 'pasta' && isPasta && (
              <img src="/images/check.png" alt="Correct" className="w-[75px] object-contain sm:w-[150px] absolute top-0 left-12" />
            )}  
            {answer == 'pasta' && !isPasta && (
              <img src="/images/x.png" alt="Correct" className="w-[75px] object-contain sm:w-[150px] absolute top-0 left-12" />
            )}  

          </div>
        </button>
        <img src="/images/or.png" alt="Or" className="w-[50px] object-contain sm:w-[100px]" />
        <button onClick={() => guess('color')}>
          <div className="relative">
            <img src="/images/color.png" alt="Color" className="w-[150px] object-contain sm:w-[300px]" />
            {answer == 'color' && !isPasta && (
              <img src="/images/check.png" alt="Correct" className="w-[75px] object-contain sm:w-[150px] absolute top-2 sm:top-5 left-12" />
            )}  
            {answer == 'color' && isPasta && (
              <img src="/images/x.png" alt="Correct" className="w-[75px] object-contain sm:w-[150px] absolute top-2 sm:top-5 left-8" />
            )}  
          </div>
        </button>
      </div>
    </div>
  );
};

export default GamePage;
