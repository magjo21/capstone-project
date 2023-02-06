import React, { useState } from "react";
import Link from "next/link";
import { globalReviews } from ".";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

console.clear();

const initialAspects = [
  { id: "1", name: "Hospitality", status: false },
  { id: "2", name: "Cleanness", status: false },
  { id: "3", name: "Food Quality", status: false },
  { id: "4", name: "Food Quantity", status: false },
  { id: "5", name: "Ambience", status: false },
  { id: "6", name: "Friendliness", status: false },
];

export default function GoodPage() {
  const router = useRouter();
  const [aspects, setAspects] = useState(initialAspects);
  const [reviews, setReviews] = useAtom(globalReviews);
  const { review } = router.query;

  if (review !== "good" && review !== "neutral" && review !== "bad") {
    return (
      <>
        <h1>404 Page not found</h1>
        <Link href={"/"}>GO Back to Home</Link>
      </>
    );
  }

  const activeAspects = aspects.filter((aspect) => aspect.status).length;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setReviews((previous) => {
      return {
        ...previous,
        [review]: {
          count: previous[review].count + 1,
          aspects: {
            hospitality: data.Hospitality
              ? previous.good.aspects.hospitality + 1
              : previous.good.aspects.hospitality,
            cleanness: data.Cleanness
              ? previous.good.aspects.cleanness + 1
              : previous.good.aspects.cleanness,
            foodQuailty: data["Food Quality"]
              ? previous.good.aspects.foodQuailty + 1
              : previous.good.aspects.foodQuailty,
            foodQuantity: data["Food Quantity"]
              ? previous.good.aspects.foodQuantity + 1
              : previous.good.aspects.foodQuantity,
            ambience: data.Ambience
              ? previous.good.aspects.ambience + 1
              : previous.good.aspects.ambience,
            friendliness: data.Friendliness
              ? previous.good.aspects.friendliness + 1
              : previous.good.aspects.friendliness,
          },
        },
      };
    });
    router.push(`/thanks`);
  }
  function handleToggleAspects(id) {
    setAspects(
      aspects.map((aspect_) =>
        aspect_.id === id ? { ...aspect_, status: !aspect_.status } : aspect_
      )
    );
  }

  return (
    <>
      <h1>{review}</h1>
      <h2>{activeAspects}</h2>
      <form onSubmit={handleSubmit}>
        {aspects.map((aspect) => (
          <div key={aspect.id}>
            <label htmlFor={`${aspect}-checkbox`}>{aspect.name}</label>
            <input
              name={aspect.name}
              type="checkbox"
              id={`${aspect}-checkbox`}
              checked={aspect.status}
              onChange={() => handleToggleAspects(aspect.id)}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
      <Link href="/">Go back to Menu</Link>
    </>
  );
}
