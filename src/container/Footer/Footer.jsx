import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">Avenue de l'Université, Kenitra</p>
        <p className="p__opensans">+212 573-124-000</p>
        <p className="p__opensans">+212 573-411-007</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.leCoin} alt="footer-logo" />
        <p className="p__opensans">
          La meilleure façon de se trouver est de se perdre dans le service des
          autres.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15" }}
        />
        <div>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
      </div>
      <div className="app__footer-links_works">
        <h1 className="app__footer-headtext">Horaires de travail</h1>
        <p className="p__opensans">Lundi à Vendredi</p>
        <p className="p__opensans">08h00 - 12h00</p>
        <p className="p__opensans">Samedi - Dimanche</p>
        <p className="p__opensans">07h00 - 23h00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2024 Made with love by{" "}
        <a href="https://github.com/alienfoxx" className="p__cormorant">
          Alienfox
        </a>
        <FiGithub />
      </p>
    </div>
  </div>
);

export default Footer;
