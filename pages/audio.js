import Head from 'next/head'
import Link from "next/link"
import utilStyles from '../styles/utils.module.css'
import { useRef } from 'react'

export default function Audio() {

  const audioElem = useRef()

  function play() {
    audioElem.current.play();
  }

  return (
    <div className="content_bg">
      <div className="container">
        <Head>
          <title>Audio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={utilStyles.heading2Xl}>Session 2</section>
        <ol className={utilStyles.headingMd}>
          <li>Please press the button on the wrist band once <b>(you will see a red light)</b>.</li>
          <li>Click on <b>Play</b> button to start the music.</li>
          <li>Sit back, stay relaxed and enjoy the music.</li>
        </ol>

        <div>
          <button onClick={() => play()}>Play</button>

          <audio src='/music.mp3' ref={audioElem}></audio>

        </div>
        <ol className={utilStyles.headingMd}>
          <li>After the music stops, press the button on the wristband once more. </li>
          <li>Later, click the below <b>link </b>to go to the next session.</li>
        </ol>
        <div className="corner">
          <Link href="/session3Instructions">
            <a>Click here to go to next session</a>
          </Link><br></br>

        </div>
      </div>
    </div>
  )
}
