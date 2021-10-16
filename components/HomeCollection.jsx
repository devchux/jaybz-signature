import Image from "next/image";
import Title from "./Title";
import RoundButton from "./RoundButton";
import SingleCollection from "./SingleCollection";
import { useRouter } from "next/router";

export default function HomeCollection({ featured, isHome }) {
  const router = useRouter();

  return (
    <section className={`py-5 p-md-5 feature ${isHome ? 'is-home' : ''}`}>
      <div className="container">
        <Title>
          FEATURED <br /> COLLECTIONS
        </Title>
        <div className="collection-wrapper">
          {featured.map(({ src, name, price }) => (
            <SingleCollection
              key={src}
              src={src}
              name={name}
              price={price}
              className=""
            />
          ))}
        </div>
        {isHome && (
          <div className="d-flex justify-content-center align-items-center">
            <RoundButton
              className="rounded-pill"
              onClick={() => router.push("/collections")}
            >
              <Image src="/briefcase.svg" alt="works" width={16} height={16} />{" "}
              <span className="ms-2">View All</span>
            </RoundButton>
          </div>
        )}
      </div>
    </section>
  );
}
