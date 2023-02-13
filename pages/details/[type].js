import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function Detailpage() {
  const router = useRouter();
  const { type } = router.query;
  const { data, isloading, error } = useSWR(`/api/restaurant/${1234}`);

  if (isloading) {
    return <p>Is Loading</p>;
  }
  if (error) {
    return <p>404 ERORR!!!</p>;
  }

  if (type) {
    return (
      <>
        <ul>
          {data?.reviews[type].aspects.map((aspect) => {
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
