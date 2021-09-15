import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </>
  )
}