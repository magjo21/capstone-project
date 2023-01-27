import Link from "next/link";
import { useRouter } from "next/router";

const router = useRouter;

export default function HomePage() {
  return (
    <>
      <h1>EasyRev</h1>
      <Link href="../user-pages/good-page">Good</Link>
      <br />
      <Link href="../user-pages/middle-page">Middle</Link>
      <br />
      <Link href="../user-pages/bad-page">Bad</Link>
      <br />
      <Link href="../login/login">
        <SVGIcon variant="github" width="50px" />
      </Link>
    </>
  );
}

const paths = {
  github: {
    path: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
    viewbox: "0 0 24 24",
  },
};

function SVGIcon({ variant, width, color = "currentColor" }) {
  return (
    <svg viewBox={paths[variant].viewbox} width={width} fill={color}>
      <title>{variant}</title>
      <path d={paths[variant].path} />
    </svg>
  );
}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <title>menu</title>
  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
</svg>;
