import { SVGIcon } from "@/components/SVGIcons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <h1>EasyRev</h1>
      <button
        onClick={() => {
          router.push("/good");
        }}
      >
        <SVGIcon name="happy emoticon" variant="happy" witdh="50px" />
      </button>
      <br />
      <button
        onClick={() => {
          router.push("/neutral");
        }}
      >
        <SVGIcon name="neutral emoticon" variant="neutral" witdh="50px" />
      </button>
      <br />
      <button
        onClick={() => {
          router.push("/bad");
        }}
      >
        <SVGIcon name="sad emoticon" variant="sad" witdh="50px" />
      </button>
      <br />
      <Link href="/overview">
        <SVGIcon name="menu" variant="overview" width="50px" />
      </Link>
    </>
  );
}
