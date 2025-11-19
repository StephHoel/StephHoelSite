import Head from 'next/head'
import { Membros } from '../src/pages/Membros'

export default function MembrosPage() {
  return (
    <>
      <Head>
        <title>Membros — Steph Hoel</title>
      </Head>
      <Membros />
    </>
  )
}
