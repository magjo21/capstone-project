import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>EasyRev</h1>
      <Link href="/good-page">
        <button type="button">Good</button>
      </Link>
      <Link href="/middle-page">
        <button type="button">Middle</button>
      </Link>
      <Link href="/bad-page">
        <button type="button">Bad</button>
      </Link>
      {/* <Link href="/login.js">
        <button type="button">Login</button>
      </Link> */}
    </>
  );
}
