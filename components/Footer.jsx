import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container d-md-flex align-items-center">
        <div className="left">
          <div>
            <Link className="navbar-brand" href="/" passHref>
              <a>
                <Image
                  src="https://res.cloudinary.com/dkasztqkx/image/upload/v1634343896/logo2_jkdspg.png"
                  width={200}
                  height={80}
                  quality={100}
                  alt="jaybz_signature"
                />
              </a>
            </Link>
          </div>
          <div className="p-2">
            15 Greenhouse Road, <br /> University of Nigeria,
            <br /> Nsukka,
            <br /> Enugu State, <br /> Nigeria.
          </div>
          <div className="p-2">
            <Link href="tel:09090623756" passHref>
              <a>
                <Image src="/phone.png" width={14} height={14} alt="" />{" "}
                <span className="ms-2">09090623756</span>
              </a>
            </Link><br /><br />
            <Link href="mailto:Jaybz_signature@gmail.com" passHref>
              <a>
                <Image src="/email_white.png" width={14} height={14} alt="" />{" "}
                <span className="ms-2">Jaybz_signature@gmail.com</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-3 mt-md-0">
          <Link href="#" target="_blank" passHref>
            <a className="mx-2">
              <Image src="/fb.png" width={50} height={50} alt="" />
            </a>
          </Link>
          <Link href="#" target="_blank" passHref>
            <a className="mx-2">
              <Image src="/insta.png" width={50} height={50} alt="" />
            </a>
          </Link>
        </div>
      </div>
      <div className="text-center py-5">Copyright &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
