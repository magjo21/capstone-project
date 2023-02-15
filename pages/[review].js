import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const Checkbox = styled.input`
  opacity: 0;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: lightblue;
`;

const Fieldset = styled.fieldset`
  border: none;
  text-align: center;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 0.4rem;
  background-color: ${({ active }) => (active ? "#34A149" : "lightgrey")};
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px grey;

  &:hover {
    filter: brightness(1.1);
  }

  &:hover ${Checkbox} {
    filter: brightness(1.1);
  }

  &:checked:hover {
    filter: brightness(0.9);
  }
`;

const StyledSubmit = styled.button`
  background-color: green;
  color: white;
  margin-top: 20px;
  display: block;
  margin: auto;
  padding: 12px 23px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(-100%);
  animation: slidein 1s ease-in-out 1s forwards;

  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 3px 8px 3px 8px;
  background-color: #bebebe;
  color: black;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;

  &:hover {
    filter: brightness(1.1);
  }
`;

const StyledH1 = styled.h1`
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin: 40px auto 0;
`;

const StyledH2 = styled.h2`
  margin-bottom: 10px;
`;

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
    <Container>
      {review === "good" && <StyledH1>What did you like especially?</StyledH1>}
      {review === "neutral" && <StyledH1>What can we do better?</StyledH1>}
      {review === "bad" && <StyledH1>What went wrong?</StyledH1>}
      <StyledH2>{activeAspects}/6</StyledH2>
      <form onSubmit={handleSubmit}>
        {aspects.map((aspect) => (
          <Fieldset key={aspect.id} active={aspect.status}>
            <label htmlFor={`${aspect.name}-checkbox`}>{aspect.name}</label>
            <Checkbox
              name={aspect.name}
              type="checkbox"
              id={`${aspect.name}-checkbox`}
              checked={aspect.status}
              onChange={() => handleToggleAspects(aspect.id)}
            />
          </Fieldset>
        ))}

        <StyledSubmit type="submit">Submit</StyledSubmit>
      </form>

      <StyledLink href="/">Go back to Menu</StyledLink>
    </Container>
  );
}
