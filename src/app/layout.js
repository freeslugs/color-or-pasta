import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> 
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />*/}
        {/*<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Cabin+Sketch&display=swap" rel="stylesheet" />*/}

      </Head>
      <body>{children}</body>
    </html>
  )
}
