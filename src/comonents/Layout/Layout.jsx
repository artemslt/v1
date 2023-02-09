import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../theme";
import { Logo } from "../Logo/Logo";
import { MenuButton } from "../MainNav/MainNav.styled";
import { ServiceButtonGroupe } from "../ServiceButtonGroup/ServiceButtonGroupe";
import { Header, Container, Footer } from "./Layout.styled";

function Layout() {
  const [selectedTheme, setSelectedTheme] = useState(LightTheme);

  function handleThemeSwitch() {
    if (selectedTheme.name === "light") {
      return setSelectedTheme(DarkTheme);
    }
    return setSelectedTheme(LightTheme);
  }
  console.log("after", selectedTheme.name);

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Header>
          <Logo />
          <MenuButton>menu</MenuButton>
          <ServiceButtonGroupe handleThemeSwitch={handleThemeSwitch} />
        </Header>
        <main>
          <Outlet />
        </main>
        <Footer>
          <p> Developted by me and coffee</p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
