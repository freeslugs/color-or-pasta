import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Color or Pasta!</h1>
        <p className="text-lg">Start the game and test your knowledge.</p>
        {/* Additional content */}
      </div>
    </div>    
  )
}


// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Welcome to Color or Pasta!</h1>
//       <p>Start the game and test your knowledge.</p>
//       {/* Add additional elements, such as buttons or images */}
//     </div>
//   );
// };

// export default LandingPage;
