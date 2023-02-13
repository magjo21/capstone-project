import { SVGIcon } from "@/components/SVGIcons";
import Link from "next/link";
import useSWR from "swr";

export default function Goodbye() {
  const { data, isloading, error } = useSWR(`/api/restaurant/${1234}`);

  if (isloading) {
    return <p>Is Loading</p>;
  }
  if (error) {
    return <p>404 ERORR!!!</p>;
  }
  const sum =
    data?.reviews.good.count +
    data?.reviews.neutral.count +
    data?.reviews.bad.count;

  return (
    <>
      <h1>Overview</h1>
      <SVGIcon name="happy emoticon" variant="happy" witdh="50px" />
      <p>{((data?.reviews.good.count / sum) * 100) | 0}%</p>
      <Link href="/details/good">Details</Link>

      <br />

      <SVGIcon name="neutral emoticon" variant="neutral" witdh="50px" />
      <p>{((data?.reviews.neutral.count / sum) * 100) | 0}%</p>
      <Link href="/details/neutral">Details</Link>
      <br />

      <SVGIcon name="sad emoticon" variant="sad" witdh="50px" />
      <p>{((data?.reviews.bad.count / sum) * 100) | 0}%</p>
      <Link href="/details/bad">Details</Link>
      <br />
      <br />

      <Link href="/">Go back</Link>
    </>
  );
}
