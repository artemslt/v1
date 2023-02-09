import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  min-height: 90vh;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
`;
export const Footer = styled.footer`
  text-align: center;
`;
