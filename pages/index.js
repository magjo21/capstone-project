import { SVGIcon } from "@/components/SVGIcons";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";

export const globalReviews = atom({
  good: {
    count: 0,

    aspects: [
      { name: "Hospitality", key: "hospitality", value: 0 },
      { name: "Cleaness", key: "cleaness", value: 0 },
      { name: "Food Quality", key: "foodQuailty", value: 0 },
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
      { name: "Food Quality", key: "foodQuailty", value: 0 },
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
      { name: "Food Quality", key: "foodQuailty", value: 0 },
      { name: "Food Quantity", key: "foodQuantity", value: 0 },
      { name: "Ambience", key: "ambience", value: 0 },
      { name: "Friendliness", key: "friendliness", value: 0 },
    ],
  },
});

export default function HomePage() {
  const router = useRouter();
  const [reviews, setReviews] = useAtom(globalReviews);
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
