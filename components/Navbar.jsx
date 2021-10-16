import Link from "next/link";
import Image from "next/image";
import RoundButton from "./RoundButton";

const Navbar = ({ scrolled }) => (
  <nav className={`navbar navbar-expand-lg navbar-light py-4 ${scrolled ? 'scrolled' : ''}`}>
    <div className="container">
      <Link className="navbar-brand" href="/" passHref>
        <a>
          <Image
            src="https://res.cloudinary.com/dkasztqkx/image/upload/v1634343893/logo_x04t9e.png"
            width={130}
            height={50}
            quality={100}
            alt="jaybz_signature"
          />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item me-5 fw-bold">
            <Link className="nav-link" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item me-5 fw-bold">
            <Link className="nav-link" aria-current="page" href="/#about">
              About Us
            </Link>
          </li>
          <li className="nav-item me-5 fw-bold">
            <Link className="nav-link" aria-current="page" href="/collections">
              Collections
            </Link>
          </li>
        </ul>
        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
          <RoundButton className="rounded-pill">Get a Quote</RoundButton>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
