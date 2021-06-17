import React from "react";

// styles
import styles from "./Footer.module.css";

// components
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.links_container}>
          <FooterLink name="Follow Us Here">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            <AiOutlineYoutube />
          </FooterLink>
          <FooterLink name="Contact Us" />
          <FooterLink name="About Us" />
        </div>
        <div>
          Mailing Address: <br />
          P.O. Box 20026 <br />
          1077 North Service Road #39 <br />
          Mississauga, ON L4Y 1A6 <br />
          <br />
          Note: this is a mailing address only – it is not a shelter. <br />
          Our foster homes and cats / kittens are located all over
          GTA............
        </div>
      </div>
    </footer>
  );
};

export default Footer;
