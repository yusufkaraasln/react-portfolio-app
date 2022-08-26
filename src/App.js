import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import References from "./components/references/References";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Topbar open={openMenu} setOpen={setOpenMenu} />
      <Menu open={openMenu}/>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <References></References>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
