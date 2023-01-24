import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const betterButtons = [
  { id: "1", name: "Hospitality", status: false },
  { id: "2", name: "cleanness", status: false },
  { id: "3", name: "Food Quality", status: false },
  { id: "4", name: "Food Quantity", status: false },
  { id: "5", name: "Ambience", status: false },
  { id: "6", name: "Friendlyness", status: false },
];

export default function BadPage() {
  const router = useRouter();
  const [buttons, setButtons] = useState(betterButtons);

  function handleSubmit() {
    window.localStorage.setItems(`buttons`, JSON.stringify(buttons));
  }

  function handleButtonStatus(id) {
    setButtons(
      buttons.map((button) => {
        if (button.id === id) {
          console.log(button);
          return { ...button, status: !button.status };
        }
        return button;
      })
    );
  }

  return (
    <>
      <h1>What went wrong? </h1>

      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            onClick={() => {
              handleButtonStatus(button.id);
            }}
            style={{ backgroundColor: button.status ? "green" : "white" }}
          >
            {button.name}
          </button>
        );
      })}

      <Link href="/">
        <button type="button">Go Back to Menu</button>
      </Link>
      <Link href={"/thanks"}>
        <button onClick={handleSubmit}>Submit</button>
      </Link>
    </>
  );
}
