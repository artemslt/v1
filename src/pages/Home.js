import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../comonents/Section/Section.styled";

function Home() {
  return (
    <Section>
      <h2>Hi!!! I'm Artem Slatin. </h2>
      <h2>And I'm fullstack developer</h2>
      <Wrapper>
        <StyledLink>
          <NavLink to="gallery">&#8658; see my projects</NavLink>
          <UnderLine />
        </StyledLink>
        <StyledLink>
          <NavLink to="about">&#8658; more about me</NavLink>
          <UnderLine />
        </StyledLink>
      </Wrapper>
    </Section>
  );
}

export default Home;

const UnderLine = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  margin-bottom: 6px;
  bottom: 0;
  left: 0;
  background-color: #606887;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  transform: translateX(-101%) translateZ(0px);
`;

const StyledLink = styled.div`
  overflow: hidden;
  &:hover {
    ${UnderLine} {
      transform: translateX(0) translateZ(0px);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
