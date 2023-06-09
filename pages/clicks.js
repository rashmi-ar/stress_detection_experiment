import React, { useState } from "react";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function App() {
  
  const [circleX, setXaxis] = useState()
  const [circleY, setYaxis] = useState()
  
  const onClick = () => {}

  const start = () => {
    setInterval(() => {
      setXaxis(Math.floor(Math.random() * window.innerWidth));
      setYaxis(Math.floor(Math.random() * (window.innerHeight - 50) + 50))
    }, 2000)
  }

  return (
    <div className="container">
      <Head>
        <title>Session 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Session 3</section>
      <ol className={utilStyles.headingMd}>
        Click on <b>Start game</b> when you are ready.
      </ol>
      <style>
        {`
        .circle {
          border: 1px solid black;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        `}
      </style>
      <meta httpEquiv="refresh" content="40;url=/session4Instructions" />
      <button className="clicksButton" onClick={start}>Start game</button>
      
      {circleX && circleY && (
        <div
          className="circle"
          style={{
            left: `${circleX}px`,
            top: `${circleY}px`,
            position: "absolute"
          }}
          onClick={onClick}
        >
          &nbsp;
        </div>
      )}

    </div>
  );
}