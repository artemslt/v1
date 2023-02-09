import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const MenuButton = styled.button`
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto";
  font-weight: 600;
  font-size: 34px;
  text-transform: uppercase;
  padding: 16px;
  border: none;
  border-radius: 32px;
  color: inherit;
  background-color: ${(props) => props.theme.colors.first};
  &:hover {
    background-color: ${(props) => props.theme.colors.second};
  }
`;
