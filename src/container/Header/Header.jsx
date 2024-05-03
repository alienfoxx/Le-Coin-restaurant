import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding  " id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Explorez un monde de saveurs" />
      <h1 className="app__header-h1">Le Plaisir de la Cuisine</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <button type="button" className="custom__button">
        Explorez notre Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;
