/* eslint-disable import/no-anonymous-default-export */
import { NextRequest, NextResponse } from 'next/server';

// export default (req, res) => {
//     if (req.method === 'POST') {
//       // Handle POST request
//       res.status(200).json({ message: 'Received POST request' });
//     } else if (req.method === 'GET') {
//       // Handle GET request
//       res.status(200).json({ message: 'Received GET request' });
//     } else {
//     //   res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   };
  


// export default function handler(req, res) {
//     // console.log(res)
//     return NextResponse.status(200).json({ message: 'Hello from the API endpoint!' });

//   }
  

export default function handler(req, res) {
  res.status(200).json({ message: "HOLO"})
}