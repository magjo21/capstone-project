import { useRouter } from "next/router";
import { globalReviews } from "..";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Detailpage() {
  const router = useRouter();
  const { type } = router.query;
  const [reviews, setReviews] = useAtom(globalReviews);

  if (type) {
    return (
      <>
        <ul>
          {reviews[type].aspects.map((aspect) => {
            return (
              <li key={aspect.key}>
                {aspect.name}: {aspect.value}
              </li>
            );
          })}
        </ul>
        <Link href={"/overview"}>Go back</Link>
      </>
    );
  } else {
    return <p>Try again</p>;
  }
}
