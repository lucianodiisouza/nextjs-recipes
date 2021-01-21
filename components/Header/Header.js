import Head from "next/head";
import Link from "next/link";

import HeaderStyled from "./Header.styled";

export default function Header(props) {
  return (
    <header className="header">
      <style jsx>{HeaderStyled}</style>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      <Link href="/">
        <a>
          <img src="/img/logo.svg" alt="NextRecipes" />
        </a>
      </Link>
    </header>
  );
}
