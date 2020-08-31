import { useState } from "react";

import { ArrowLeft, ArrowRight, ClipBoard, Clock } from "../../assets/svgs";

import "./sideNav.scss";

function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="side-nav" style={{ width: isOpen ? 240 : 84 }}>
      <div className="nav-arrow" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ArrowLeft /> : <ArrowRight />}
      </div>
      <ul>
        <li>
          <ClipBoard />
          <span hidden={!isOpen}>Projects</span>
        </li>
        <li>
          <Clock />
          <span hidden={!isOpen}>Timer</span>
        </li>
        <li>
          <Clock />
          <span hidden={!isOpen}>Colors</span>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
