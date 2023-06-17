import React from 'react';

const GamePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full">
        <img src="/images/high-score.png" alt="High Score" className="w-[300px] object-contain "  />
        <img src="/images/current-score.png" alt="Current Score" className="w-[300px] object-contain "  />
      </div>
      <h1 className="text-4xl font-bold">Word</h1>
      <div className="flex justify-center">
        <img src="/images/pasta-brown.png" alt="Pasta Brown" className="w-[300px] object-contain "  />
        <img src="/images/or.png" alt="Or" className="w-[100px] object-contain " />
        <img src="/images/color.png" alt="Color" className="w-[300px] object-contain " />
      </div>
    </div>
  );
};

export default GamePage;
