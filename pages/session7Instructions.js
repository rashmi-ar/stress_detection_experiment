import Head from 'next/head'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Instructions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Session 7</section>
      <p className={utilStyles.headingLg}> <b><u>Please read the following instructions carefully. Feel free to ask the instructor if you have any questions.</u></b></p>
      <h1>Great job!</h1>
      <ol className={utilStyles.headingMd}>
        <li><b>Please press the wrist band's button for 2 or 3 seconds.</b></li>
        <li>Click on <b>Start</b> button to start the next session</li>
      </ol>

      <div>
      
      <button type="submit" onClick={() => router.push('/post_form')}>Start</button>
      
      </div>

    </div>
  )
}