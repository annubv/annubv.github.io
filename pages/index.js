import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = ({ toggleTheme, currentTheme }) => {
  return (
    <div>
      <Head>
        <title>Anubhav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <HeroSection />
    </div>
  );
};

export default Home;
