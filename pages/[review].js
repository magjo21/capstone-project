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

  if (!["good", "neutral", "bad"].includes(review)) {
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
              ? previous[review].aspects.hospitality + 1
              : previous[review].aspects.hospitality,
            cleanness: data.Cleanness
              ? previous[review].aspects.cleanness + 1
              : previous[review].aspects.cleanness,
            foodQuailty: data["Food Quality"]
              ? previous[review].aspects.foodQuailty + 1
              : previous[review].aspects.foodQuailty,
            foodQuantity: data["Food Quantity"]
              ? previous[review].aspects.foodQuantity + 1
              : previous[review].aspects.foodQuantity,
            ambience: data.Ambience
              ? previous[review].aspects.ambience + 1
              : previous[review].aspects.ambience,
            friendliness: data.Friendliness
              ? previous[review].aspects.friendliness + 1
              : previous[review].aspects.friendliness,
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
          <fieldset key={aspect.id}>
            <label htmlFor={`${aspect}-checkbox`}>{aspect.name}</label>
            <input
              name={aspect.name}
              type="checkbox"
              id={`${aspect}-checkbox`}
              checked={aspect.status}
              onChange={() => handleToggleAspects(aspect.id)}
            />
          </fieldset>
        ))}

        <button type="submit">Submit</button>
      </form>
      <Link href="/">Go back to Menu</Link>
    </>
  );
}
