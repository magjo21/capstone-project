import { SVGIcon } from "@/components/SVGIcons";
import { useAtom } from "jotai";
import Link from "next/link";
import { globalReviews } from ".";

export default function Goodbye() {
  const [reviews] = useAtom(globalReviews);
  const sum = reviews.good.count + reviews.neutral.count + reviews.bad.count;

  return (
    <>
      <h1>Overview</h1>
      <SVGIcon name="happy emoticon" variant="happy" witdh="50px" />
      <p>{reviews.good.count}</p>
      <Link href="/details/good">Details</Link>

      <br />

      <SVGIcon name="neutral emoticon" variant="neutral" witdh="50px" />
      <p>{reviews.neutral.count}</p>
      <Link href="/details/neutral">Details</Link>
      <br />

      <SVGIcon name="sad emoticon" variant="sad" witdh="50px" />
      <p>{reviews.bad.count}</p>
      <Link href="/details/bad">Details</Link>
      <br />
      <br />

      <Link href="/">Go back</Link>
    </>
  );
}
