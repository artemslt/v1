import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<Contacts />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
