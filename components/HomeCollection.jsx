import Image from "next/image";
import Title from "./Title";
import RoundButton from "./RoundButton";
import SingleCollection from "./SingleCollection";

export default function HomeCollection() {
  const featured = [
    {
      src: "/collection%20(18).png",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: ["/collection%20(18).png"],
      price: "25,000.00",
    },
    {
      src: "/collection%20(17).png",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: ["/collection%20(17).png"],
      price: "25,000.00",
    },
    {
      src: "/collection%20(13).png",
      name: "Crotchet Hamlet Wear",
      description: "",
      categories: ["/collection%20(13).png"],
      price: "25,000.00",
    },
  ];

  return (
    <section className="py-5 p-md-5 feature">
      <div className="container">
        <Title>
          FEATURED <br /> COLLECTIONS
        </Title>
        <div className="d-flex flex-wrap gap-4 gap-md-5 gap-lg-4 px-3 px-md-1 px-lg-3 collection-wrapper">
          {featured.map(({ src, name, price }) => (
            <SingleCollection
              key={src}
              src={src}
              name={name}
              price={price}
              className="col-12 col-md-5 col-lg"
            />
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <RoundButton className="rounded-pill" onClick={() => router.push("/collections")}>
            <Image src="/briefcase.svg" alt="works" width={16} height={16} />{" "}
            <span className="ms-2">View All</span>
          </RoundButton>
        </div>
      </div>
    </section>
  );
}
