import Head from 'next/head'
import { Home } from '../src/pages/Home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home — Steph Hoel</title>
      </Head>
      <Home />
    </>
  )
}
