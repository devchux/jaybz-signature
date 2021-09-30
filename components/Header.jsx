import Image from "next/image";
import { useRouter } from "next/router";
import MiniBanner from "./MiniBanner";
import RoundButton from "./RoundButton";

const Header = ({ subtext, text, src, isHome }) => {
  const router = useRouter();
  return (
    <header>
      <div className="container d-sm-flex justify-content-sm-around px-4 content">
        <div className="d-flex align-items-center justify-content-center text">
          <div>
            <p>{subtext}</p>
            <h1>{text}</h1>
            {isHome ? (
              <RoundButton
                className="mt-4 rounded-pill"
                onClick={() => router.push("/collections")}
              >
                <Image
                  src="/briefcase.svg"
                  alt="works"
                  width={16}
                  height={16}
                />{" "}
                <span className="ms-2">Our Collections</span>
              </RoundButton>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="image">
          <Image src={src} width={400} height={500} alt="header_image" />
        </div>
      </div>
      <MiniBanner>
        <div className="d-flex gap-2 gap-sm-4 justify-content-center align-items-center theme">
          <div className="text">CLASSY</div>
          <div className="circle"></div>
          <div className="text">COMFORTABLE</div>
          <div className="circle"></div>
          <div className="text">CONFIDENT</div>
        </div>
      </MiniBanner>
    </header>
  );
};

export default Header;
