import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anubhav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
