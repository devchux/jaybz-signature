import About from "../components/About";
import Header from "../components/Header";
import HomeCollection from "../components/HomeCollection";

export default function Home() {
  const featured = [
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343902/collection_18_sycxtc.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343902/collection_18_sycxtc.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343899/collection_17_mloqbs.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343899/collection_17_mloqbs.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343896/collection_13_lna0uz.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343896/collection_13_lna0uz.jpg",
      ],
      price: "25,000.00",
    },
  ];
  return (
    <>
      <Header
        isHome
        subtext="AWESOME CROTCHET WEARS"
        text="Elegance beyond your imagination"
        src="https://res.cloudinary.com/dkasztqkx/image/upload/v1634343889/header1_etesmq.png"
      />
      <About />
      <HomeCollection featured={featured} isHome />
    </>
  );
}
