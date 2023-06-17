import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <img src="/images/color.png" alt="Color" className="w-[300px]"  />
        <img src="/images/or.png" alt="Or"  className="w-[100px]"  />
        <img src="/images/pasta-brown.png" alt="Pasta Brown"  className="w-[300px]"  />
        <Link href="/game">
          <button className="start-button" />
        </Link>
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
