import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className="thankyou">
      <Head>
        <title>Thank you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Thank you for participating! 😄</section>


    </div>
  )
}