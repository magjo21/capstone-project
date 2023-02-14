import { SVGIcon } from "@/components/SVGIcons";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: lightblue;
`;

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  margin: 10px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function HomePage() {
  const router = useRouter();

  return (
    <HomePageContainer>
      <h1>EasyRev</h1>
      <RoundButton
        onClick={() => {
          router.push("/good");
        }}
      >
        <SVGIcon
          name="happy emoticon"
          variant="happy"
          width="80px"
          color="green"
        />
      </RoundButton>
      <RoundButton
        onClick={() => {
          router.push("/neutral");
        }}
      >
        <SVGIcon
          name="neutral emoticon"
          variant="neutral"
          width="80px"
          color="orange"
        />
      </RoundButton>
      <RoundButton
        onClick={() => {
          router.push("/bad");
        }}
      >
        <SVGIcon name="sad emoticon" variant="sad" width="80px" color="red" />
      </RoundButton>
      <Link href="/overview">
        <SVGIcon name="menu" variant="overview" width="50px" />
      </Link>
    </HomePageContainer>
  );
}
