import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Instructions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}><br></br></section>
      <p className={utilStyles.headingLg}> <b><u>Please read the following instructions carefully. Feel free to ask the instructor if you have any questions.</u></b></p>
      <ol className={utilStyles.headingMd}>
        <li>Next session is a warm-up session.</li>
        <li>You will see circles on the screen. Click on the circles as quickly as possible.</li>
        <li>Try not to hit the <b>start game button</b> while <b>catching the circles</b>.</li>
        <li>The game automatically ends in a min.</li>
        <li>Click on <b>Next</b> to start the session.</li>
      </ol>


      <div>
      
      <button type="submit" onClick={() => router.push('/clicks')}>Next</button>
      
      </div>

    </div>
  )
}