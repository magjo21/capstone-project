import Link from "next/link";
import { useRouter } from "next/router";

const router = useRouter;

export default function HomePage() {
  return (
    <>
      <h1>EasyRev</h1>
      <Link href="/good-page">Good</Link>
      <br />

      <Link href="/middle-page">Middle</Link>
      <br />

      <Link href="/bad-page">Bad</Link>
    </>
  );
}
