import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

async function startRecording() {
  await axios.get('http://localhost:8765/recording/start/')
}

async function captureScreen() {
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
      <section className={utilStyles.heading2Xl}>Session 4</section>
      <p className={utilStyles.headingLg}> <b><u>Please read the following instructions carefully. Feel free to ask the instructor if you have any questions.</u></b></p>
      <ol className={utilStyles.headingMd}>
        <li>Your next 3 sessions will be arithmetic tasks.</li>
        <li>You will be shown a series of numbers - one by one - on the screen.</li>
        <li>Memorize the series and you will be asked to mentally <b>Add/Subtract/Multiply</b> a given number to each of the numbers in the series.</li>
        <li>For example: If the series is <b>(5, 1, 3)</b> and if you are asked to add <b>1</b>, then the correct series will be <b>(6, 2, 4)</b>.</li>
        <li>In the given field, input the new sequence.</li>
        <li>Each session lasts <b>5 minutes</b>.</li>
        <li>After completing each session click on <b>Next</b> to go to the next session.</li>
        <li><b>Now, press the wrist band's button once</b> before clicking the <b>start</b> button <b>(you will see a red light)</b>.</li>
        <li>Click on <b>Start</b> button to start your gaming sessions. <b>(Don't forget to press the wrist band's button)</b> </li>
      </ol>

      <div>

        <button type="submit" onClick={() => { startRecording(); captureScreen(); router.push('/easy') }}>
          Start


        </button>

      </div>

    </div>
  )
}