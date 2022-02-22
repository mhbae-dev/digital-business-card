import { useState } from "react";
import HeroImg from "./components/HeroImg";
import Heading from "./components/Heading";
import Buttons from "./components/Buttons";
import Toggle from "./components/Toggle";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [toggle, setToggle] = useState("");

  const handleClick = () => {
    if (toggle === "") {
      setToggle("lightmode");
    } else {
      setToggle("");
    }
  };

  return (
    <div className={`App ${toggle}`}>
      <HeroImg lightmode={toggle} />
      <Heading lightmode={toggle} />
      <Toggle onClick={handleClick} />
      <Buttons />
      <Body lightmode={toggle} />
      <Footer lightmode={toggle} />
    </div>
  );
}

export default App;
