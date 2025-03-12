import { Audiowide, Cabin_Sketch } from 'next/font/google'

export const audiowide = Audiowide({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-audiowide'
});

export const cabinsketch = Cabin_Sketch({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cabin-sketch'
});
