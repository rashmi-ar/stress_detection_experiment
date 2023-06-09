import Head from 'next/head'
import Link from "next/link"
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Welcome!</section>
      <p className={utilStyles.headingLg}> <b><u>Please read the following instructions carefully. Feel free to ask the instructor if you have any questions.</u></b></p>
      <ol className={utilStyles.headingMd}>
        <li>This experiment captures your physiological data using the wrist band and eye tracking data using the eye tracker placed on the monitor. 
          Please try not to move very often. Feel free to ask the instructor for help if you feel uncomfortable with the devices or something does not work properly. 
          You can even stop the experiment at any point in time.</li>
        <li>As the eye tracker is already calibrated, now please turn on the wrist band by pressing the button for 2 or 3 seconds until you see a <b>blue light</b>.</li>
        <li>Please make sure that the wrist band is tightly strapped.</li>
        <li><b>Experiment sessions:</b></li>
        <ol>i) In your first session, you will be asked to fill out a form. This form asks a few questions about yourself.</ol>
        <ol>ii) In your second session, you will listen to some music.</ol>
        <ol>iii) In the next 3 sessions, you will be given a few simple tasks. Try to be quick as it is timed.</ol>
        <ol>iv) In the last session, you will again be asked to fill out a form. There are a few questions related to the music and the tasks you played.</ol>
        <ol>v) Every session will include instructions. <b>Please follow them.</b></ol>
        <li>Click the <b>next</b> button when you are ready. </li>
      </ol>


      <div>
      
      <button type="submit" onClick={() => router.push('/pre_form')}>Next</button>
      
      </div>

    </div>
  )
}
