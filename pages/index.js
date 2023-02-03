import Head from "next/head";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devhacks</title>
        <meta name="description" content="An amazing music player which only plays the main part of any song." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-auto pb-10">
        <Explore />
      </main>
    </>
  );
}
