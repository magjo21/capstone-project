import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  height: 100vh;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  :20px ;
`;

const StyledLi = styled.li`
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  position: relative;
`;

const StyledDivLi = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background-color: #dcdcdc;
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

export default function Detailpage() {
  const router = useRouter();
  const { type } = router.query;
  const { data, isloading, error } = useSWR(`/api/restaurant/${1234}`);

  if (isloading) {
    return <p>Is Loading</p>;
  }
  if (error) {
    return <p>404 ERORR!!!</p>;
  }

  if (type) {
    return (
      <Container>
        <h1>Details</h1>
        <StyledUl>
          {data?.reviews[type].aspects.map((aspect) => {
            return (
              <StyledLi key={aspect.key}>
                {aspect.name}
                <StyledDivLi>{aspect.value}</StyledDivLi>
              </StyledLi>
            );
          })}
        </StyledUl>
        <StyledLink href={"/overview"}>Go back</StyledLink>
      </Container>
    );
  } else {
    return <p>Try again</p>;
  }
}
