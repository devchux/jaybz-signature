import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Jaybz Signature</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Jabz signature" />
        <meta
          name="description"
          content="A fashion brand that specializes on creating male and female crotchet wears"
        />
        <meta
          name="keywords"
          content="crotchet, fashion, wears, fashion designer, yarn, tailor, fashion brand, model"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Obilor Joybrenda" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <Navbar scrolled={scrolled} />
        {children}
        <NewsLetter />
        <Footer />
      </div>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      />
    </Fragment>
  );
};

export default Layout;
