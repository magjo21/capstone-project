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

const paths = {
  overview: {
    path: "M11 9C11 10.66 9.66 12 8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9M14 20H2V18C2 15.79 4.69 14 8 14C11.31 14 14 15.79 14 18M7 9C7 9.55 7.45 10 8 10C8.55 10 9 9.55 9 9C9 8.45 8.55 8 8 8C7.45 8 7 8.45 7 9M4 18H12C12 16.9 10.21 16 8 16C5.79 16 4 16.9 4 18M22 12V14H13V12M22 8V10H13V8M22 4V6H13V4Z",
    viewbox: "0 0 24 24",
  },
  happy: {
    path: "M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z",
    viewBox: "0 0 24 24",
  },
  neutral: {
    path: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5M16,14V16H8V14H16Z",
    viewBox: "0 0 24 24",
  },
  sad: {
    path: "M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z",
    viewBox: "0 0 24 24",
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
