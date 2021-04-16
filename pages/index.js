import Head from "next/head";
import styled from "styled-components";

const CustomDiv = styled.div``;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anubhav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomDiv>Hello!</CustomDiv>
    </div>
  );
}
