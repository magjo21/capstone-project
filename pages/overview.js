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

  const emptyReview = {
    reviews: {
      good: {
        count: 0,
        aspects: [
          { name: "Hospitality", key: "hospitality", value: 0 },
          { name: "Cleaness", key: "cleaness", value: 0 },
          { name: "Food Quality", key: "foodQuality", value: 0 },
          { name: "Food Quantity", key: "foodQuantity", value: 0 },
          { name: "Ambience", key: "ambience", value: 0 },
          { name: "Friendliness", key: "friendliness", value: 0 },
        ],
      },
      neutral: {
        count: 0,
        aspects: [
          { name: "Hospitality", key: "hospitality", value: 0 },
          { name: "Cleaness", key: "cleaness", value: 0 },
          { name: "Food Quality", key: "foodQuality", value: 0 },
          { name: "Food Quantity", key: "foodQuantity", value: 0 },
          { name: "Ambience", key: "ambience", value: 0 },
          { name: "Friendliness", key: "friendliness", value: 0 },
        ],
      },
      bad: {
        count: 0,
        aspects: [
          { name: "Hospitality", key: "hospitality", value: 0 },
          { name: "Cleaness", key: "cleaness", value: 0 },
          { name: "Food Quality", key: "foodQuality", value: 0 },
          { name: "Food Quantity", key: "foodQuantity", value: 0 },
          { name: "Ambience", key: "ambience", value: 0 },
          { name: "Friendliness", key: "friendliness", value: 0 },
        ],
      },
    },
  };
  async function handleRefresh() {
    try {
      const response = await fetch(`/api/restaurant/${1234}`, {
        method: "PUT",
        body: JSON.stringify(emptyReview),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) console.error(`error: response.status`);
    } catch (error) {
      console.error(error);
    }
  }

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
      <button type="button" onClick={handleRefresh}>
        Refresh
      </button>
      <br />

      <Link href="/">Go back</Link>
    </>
  );
}
