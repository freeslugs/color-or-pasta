import React from 'react';

const GamePage = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen" >
      {/* header */}
      {/*<div className="flex justify-between w-full">
        <img src="/images/current-score.png" alt="Current Score" className="w-[300px] object-contain "  />
        <img src="/images/high-score.png" alt="High Score" className="w-[300px] object-contain "  />
      </div>*/}
    <div className="flex flex-col  justify-between w-full sm:flex-row">
      <img src="/images/current-score.png" alt="Current Score" className="w-[300px] object-contain mb-4 sm:mb-0 sm:mr-4" />
      <img src="/images/high-score.png" alt="High Score" className="w-[300px] object-contain" />
    </div>

      {/* word section */}
      <div className="flex flex-col items-center justify-center flex-grow flex grow">  
        <h1 className="text-4xl font-bold">Word</h1>
      </div>

      {/* bottom selectors */}
      <div className="flex justify-center">
        <img src="/images/pasta-brown.png" alt="Pasta Brown" className="w-[150px] object-contain sm:w-[300px]"  />
        <img src="/images/or.png" alt="Or" className="w-[50px] object-contain sm:w-[100px]" />
        <img src="/images/color.png" alt="Color" className="w-[150px] object-contain sm:w-[300px]" />
      </div>
    </div>

    // <div className="flex flex-col items-center justify-between min-h-screen">
    //       <div className="flex grid grid-cols-3 gap-4 w-full h-full">
    //         <div className="bg-red-500 flex items-center justify-center">1</div>
    //         <div className="bg-green-500 flex items-center justify-center">2</div>
    //         <div className="bg-blue-500 flex items-center justify-center">3</div>
    //         <div className="bg-yellow-500 flex items-center justify-center">4</div>
    //         <div className="bg-purple-500 flex items-center justify-center">5</div>
    //         <div className="bg-pink-500 flex items-center justify-center">6</div>
    //         <div className="bg-orange-500 flex items-center justify-center">7</div>
    //         <div className="bg-teal-500 flex items-center justify-center">8</div>
    //         <div className="bg-indigo-500 flex items-center justify-center">9</div>
    //       </div>
    //     </div>
  );
};

export default GamePage;
