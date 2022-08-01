import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {
  return (
    <div>
      {!token ? "No Token" : "Token: " + token}
    </div>
  )
}


