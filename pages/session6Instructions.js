import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'


async function startRecording() {
  await axios.get('http://localhost:8765/recording/start/')
}

async function captureScreen(){
  await axios.get('http://localhost:8765/recording/capture/')
}

export default function Home() {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Instructions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Session 6</section>
      <p className={utilStyles.headingLg}> <b><u>Please read the following instructions carefully. Feel free to ask the instructor if you have any questions.</u></b></p>
      <h1>Great job!</h1>
      <ol className={utilStyles.headingMd}>
        <li><b>Please press the wrist band's button once.</b></li>
        <li><b>Press the wrist band's button once more</b> before clicking the <b>start</b> button <b>(you will see a red light)</b>.</li>
        <li>Click on <b>Start</b> button to start the next session.</li>
      </ol>


      <div>
      
        <button type="submit" onClick={() => {startRecording(); captureScreen(); router.push('/hard')}}>Start</button>
      
      </div>

    </div>
  )
}