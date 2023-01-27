import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

const initialAspects = [
  { id: "1", name: "Hospitality", status: false },
  { id: "2", name: "cleanness", status: false },
  { id: "3", name: "Food Quality", status: false },
  { id: "4", name: "Food Quantity", status: false },
  { id: "5", name: "Ambience", status: false },
  { id: "6", name: "Friendlyness", status: false },
];

export default function GoodPage() {
  const router = Router;
  const [aspects, setAspects] = useState(initialAspects);
  const activeAspects = aspects.filter((aspect) => aspect.status).length;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    router.push(`../user-pages/thanks`);
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
      <h1>{activeAspects}</h1>
      <form onSubmit={handleSubmit}>
        {aspects.map((aspect) => (
          <div key={aspect.id}>
            <label htmlFor={`${aspect}-checkbox`}>{aspect.name}</label>
            <input
              name={aspect.id}
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
