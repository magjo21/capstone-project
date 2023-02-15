import { SVGIcon } from "@/components/SVGIcons";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: lightblue;
`;

const EmoticonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: gray;
  }
`;

const EmoticonText = styled.p`
  margin: 0 10px;
  font-size: 24px;
`;

const DetailsLink = styled.a`
  margin-left: 10px;
  font-size: 16px;
  background-color: #bebebe;
  border-radius: 3px;
  color: black;
  padding: 3px 8px 3px 8px;
  text-decoration: none;
`;

const RefreshButton = styled.button`
  background-color: green;
  color: white;
  display: block;
  margin: 20px;
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

export default function Goodbye() {
  const router = useRouter();
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
    router.reload();
  }

  return (
    <OverviewContainer>
      <h1>Overview</h1>

      <EmoticonContainer>
        <SVGIcon
          name="happy emoticon"
          variant="happy"
          width="50px"
          fill="#4CAF50"
          color="green"
        />
        <EmoticonText>
          {((data?.reviews.good.count / sum) * 100) | 0}%
        </EmoticonText>
        <DetailsLink href="/details/good">Details</DetailsLink>
      </EmoticonContainer>

      <EmoticonContainer>
        <SVGIcon
          name="neutral emoticon"
          variant="neutral"
          width="50px"
          fill="#FFA500"
          color="orange"
        />
        <EmoticonText>
          {((data?.reviews.neutral.count / sum) * 100) | 0}%
        </EmoticonText>
        <DetailsLink href="/details/neutral">Details</DetailsLink>
      </EmoticonContainer>

      <EmoticonContainer>
        <SVGIcon
          name="sad emoticon"
          variant="sad"
          width="50px"
          fill="#FF0000"
          color="red"
        />
        <EmoticonText>
          {((data?.reviews.bad.count / sum) * 100) | 0}%
        </EmoticonText>
        <DetailsLink href="/details/bad">Details</DetailsLink>
      </EmoticonContainer>

      <RefreshButton type="button" onClick={handleRefresh}>
        Refresh
      </RefreshButton>

      <br />

      <StyledLink href="/">Go back</StyledLink>
    </OverviewContainer>
  );
}
