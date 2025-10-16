'use client';

import { useState, useEffect } from 'react';

const greetings = [
  'Hello',
  'Hallo',
  'Bonjour',
  'Hola',
  'Ciao',
  'Olá',
  'Konnichiwa',
  'Annyeonghaseyo',
  'Ni Hao',
  'Salaam',
  'Shalom',
  'Namaste',
];

export default function Home() {
  const [greeting, setGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGreeting(greetings[index]);
  }, [index]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center">
        <h1 className="text-6xl font-bold transition-opacity duration-500">
          {greeting}
        </h1>
      </div>
    </main>
  );
}
