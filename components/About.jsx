import Image from "next/image";
import Title from "./Title";

export default function About() {
  return (
    <section className="container py-5 about" id="about">
      <Title>
        WHO ARE <br /> WE?
      </Title>
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center body">
        <div className="image-wrapper">
          <Image
            src="/collection%20(10).png"
            alt="ceo"
            width={300}
            height={400}
          />
          <h5>JOYBRENDA OBILOR</h5>
          <p>Chief Executive Officer</p>
        </div>
        <div className="line"></div>
        <div className="text-wrapper">
          <span>W</span>e are dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
}
