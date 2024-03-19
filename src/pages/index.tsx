import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@app/styles/Home.module.css';
import useFilms from '@app/hooks/useFilms';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { getFilms, films = [], loading } = useFilms();

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          {films?.map((film, index) => (
            <li key={index}>
              {film?.title} - <em>{film?.director}</em>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
