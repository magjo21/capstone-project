import React, { useState } from "react";
import { useRouter } from "next/router";

export default function GoodPage() {
  const router = useRouter();
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);

  return (
    <>
      <h1>Welcome to the Good Page</h1>
      <button
        onClick={() => setButton1(!button1)}
        style={{ backgroundColor: button1 ? "green" : "white" }}
      >
        Example
      </button>
      <button
        onClick={() => setButton2(!button2)}
        style={{ backgroundColor: button2 ? "green" : "white" }}
      >
        Example
      </button>
      <button
        onClick={() => setButton3(!button3)}
        style={{ backgroundColor: button3 ? "green" : "white" }}
      >
        Example
      </button>
      <button
        onClick={() => setButton4(!button4)}
        style={{ backgroundColor: button4 ? "green" : "white" }}
      >
        Example
      </button>
      <button
        onClick={() => setButton5(!button5)}
        style={{ backgroundColor: button5 ? "green" : "white" }}
      >
        Example
      </button>
      <button
        onClick={() => setButton6(!button6)}
        style={{ backgroundColor: button6 ? "green" : "white" }}
      >
        Example
      </button>
      <button onClick={() => router.push("/")}>Go Back to to Menu</button>

      {/* is not working  */}
      <button onClick={() => router.push("/thx")}>Submit</button>
    </>
  );
}
