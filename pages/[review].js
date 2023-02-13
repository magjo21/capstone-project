import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

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
  const { review } = router.query;
  const {
    data: restaurantData,
    isloading,
    error,
  } = useSWR(`/api/restaurant/${1234}`);

  if (isloading) {
    return <p>Is Loading</p>;
  }
  if (error) {
    return <p>404 ERORR!!!</p>;
  }

  if (!["good", "neutral", "bad"].includes(review)) {
    return (
      <>
        <h1>404 Page not found</h1>
        <Link href={"/"}>GO Back to Home</Link>
      </>
    );
  }

  const activeAspects = aspects.filter((aspect) => aspect.status).length;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newReview = restaurantData.reviews[review].aspects.map((aspect) => {
      return {
        ...aspect,
        value: data[aspect.name] ? aspect.value + 1 : aspect.value,
      };
    });
    const newRestaurant = {
      ...restaurantData,
      reviews: {
        ...restaurantData.reviews,
        [review]: {
          ...restaurantData.reviews[review],
          aspects: newReview,
          count: restaurantData.reviews[review].count + 1,
        },
      },
    };

    try {
      const response = await fetch(`/api/restaurant/${1234}`, {
        method: "PUT",
        body: JSON.stringify(newRestaurant),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) console.error(`error: response.status`);
    } catch (error) {
      console.error(error);
    }
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
