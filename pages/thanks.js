import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BigText = styled.p`
  font-size: 1.5em;
  margin-top: 1s;
  opacity: 1;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ddd;
  position: fixed;
  top: 0;
  left: 0;
`;

const LoadingProgress = styled.div`
  width: 0%;
  height: 5px;
  background-color: green;
  transition: width 10s;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledGoodbye = styled.a`
  background-color: green;
  color: white;
  padding: 1em 2em;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
`;

const Heading = styled.h1`
  text-align: center;
`;

// --v-- I copied and edited this from StackOverflow --v--
export default class Goodbye extends React.Component {
  componentDidMount() {
    const loadingProgress = document.querySelector(".loading-progress");
    setTimeout(() => {
      window.location.href = "/";
    }, 10000);
    loadingProgress.style.width = "100%";
  }
  render() {
    // --^-- I copied and edited this from StackOverflow --^--

    return (
      <>
        <LoadingBar>
          <LoadingProgress className="loading-progress" />
        </LoadingBar>
        <Container>
          <Heading>Thank You For your Feedback</Heading>
          <BigText>Hope to see you again soon!</BigText>
          <StyledGoodbye href="/">See you later</StyledGoodbye>
        </Container>
      </>
    );
  }
}
