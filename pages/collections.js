import Header from "../components/Header";
import HomeCollection from "../components/HomeCollection";

const Collections = () => {
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
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343903/collection_1_kefwxz.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343903/collection_1_kefwxz.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343883/collection_4_wqybd3.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343883/collection_4_wqybd3.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343883/collection_5_vrj6ya.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343883/collection_5_vrj6ya.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343881/collection_6_cmned8.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343881/collection_6_cmned8.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343876/collection_7_m283f7.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343891/collection_9_sqkasv.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343891/collection_9_sqkasv.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343878/collection_8_dvotis.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343878/collection_8_dvotis.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343895/collection_10_e1s0t5.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343895/collection_10_e1s0t5.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343891/collection_11_e6brqq.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343891/collection_11_e6brqq.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343892/collection_12_o6gavx.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343892/collection_12_o6gavx.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343895/collection_14_fzfmju.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343895/collection_14_fzfmju.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343903/collection_16_pa3bln.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343903/collection_16_pa3bln.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343909/collection_19_ovt5gy.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343909/collection_19_ovt5gy.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343900/collection_20_ysrht0.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343903/collection_21_t9kcfy.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343908/collection_22_tj0mot.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343905/collection_23_kj0zcp.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343906/collection_24_vgiyr6.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343906/collection_24_vgiyr6.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343909/collection_25_c1uq3j.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343909/collection_25_c1uq3j.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343899/collection_27_ykinum.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343899/collection_27_ykinum.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343882/collection_28_m3odal.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343882/collection_28_m3odal.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343884/collection_30_e88y6u.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343882/collection_29_t1ta7e.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343882/collection_29_t1ta7e.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343888/collection_31_fffcyd.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343888/collection_31_fffcyd.jpg",
      ],
      price: "25,000.00",
    },
    {
      src: "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343885/collection_32_f8pryt.jpg",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: [
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343885/collection_32_f8pryt.jpg",
        "https://res.cloudinary.com/dkasztqkx/image/upload/v1634343889/collection_33_ye0y3n.jpg",
      ],
      price: "25,000.00",
    },
  ];
  return (
    <>
      <Header
        subtext="WE CREATE BREATHTAKING MAGIC"
        text="Checkout our amazing collections"
        src="https://res.cloudinary.com/dkasztqkx/image/upload/v1634343895/header3_x8a6kv.png"
      />
      <HomeCollection featured={featured} />
    </>
  );
};

export default Collections;
