'use client';

import { useState } from "react";

export default function Informacao() {
  const jogos = [
    {
      name: "MARVEL'S SPIDER-MAN REMASTERED",
      company: "Insomniac Games"
    },
    {
      name: "Ratchet & Clank: Rift Apart",
      company: "Insomniac Games"
    },
    {
      name: "Resistance: Fall of Man",
      company: "Insomniac Games"
    },
    {
      name: "EA FC 25",
      company: "Electronic Arts"
    },
    {
      name: "Apex Legends",
      company: "Electronic Arts"
    },
    {
      name: "The Sims 4",
      company: "Electronic Arts"
    }
  ];

  const [typeButton, setTypeButton] = useState('1');

  return (
    <>
      <h1>bem vindo ao jogo.</h1>
      <button onClick={() => setTypeButton('1')}>Insomniac Games</button>
      <button onClick={() => setTypeButton('2')}>Electronic Arts</button>

      {typeButton === "1" && (
        <ol>
          {jogos.map((jogo, index) => (
            jogo.company === "Insomniac Games" && (
              <div className="card" key={index}>
                <p>{jogo.name}</p>
              </div>
            )
          ))}
        </ol>
      )}

      {typeButton === "2" && (
        <ol>
          {jogos.map((jogo, index) => (
            jogo.company === "Electronic Arts" && (
              <div className="card" key={index}>
                <p>{jogo.name}</p>
              </div>
            )
          ))}
        </ol>
      )}
    </>
  );
}