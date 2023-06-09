import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import '../pages/App.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}