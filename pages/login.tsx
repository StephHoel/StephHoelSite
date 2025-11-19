import Head from 'next/head'
import { Login } from '../src/pages/Login'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login — Steph Hoel</title>
      </Head>
      <Login />
    </>
  )
}
