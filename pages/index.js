import About from "../components/About";
import Header from "../components/Header";
import HomeCollection from "../components/HomeCollection";

export default function Home() {
  return (
    <>
      <Header
        isHome
        subtext="AWESOME CROTCHET WEARS"
        text="Elegance beyond your imagination"
        src="/header1.png"
      />
      <About />
      <HomeCollection />
    </>
  );
}
