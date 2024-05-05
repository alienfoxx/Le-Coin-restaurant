import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Trouvez-nous
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Avenue de l'Université, Kenitra</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Heures d'ouverture
        </p>
        <p className="p__opensans">Lun - Ven : 10h00 - 02h00</p>
        <p className="p__opensans">Sam - Dim : 10h00 - 03h00</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visitez-nous
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
