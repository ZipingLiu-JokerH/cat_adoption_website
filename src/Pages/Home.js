import React from "react";

// images
import bgAvaliableCat from "../assets/bg_avaliableCat.png";
import bgFosterCat from "../assets/bg_fosterCat.png";
import bgVolunteer from "../assets/bg_volunteer.png";
import bgDonate from "../assets/bg_donate.png";

// styles
import styles from "./Home.module.css";

//components
import ImageLink from "../Components/ImageLink";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <h1>ABOUT US</h1>
      <p>
        Abbey Cat Adoptions is a registered charity dedicated to finding
        permanent homes for abandoned cats and kittens in the Greater Toronto
        Area. We work closely with foster homes and potential adopters to find a
        suitable match between families and their new pet.
      </p>
      <div className={styles.imageLink_container}>
        <ImageLink image={bgAvaliableCat} name="AVALIABLE CATS" />
        <ImageLink image={bgFosterCat} name="FOSTER A CAT" />
        <ImageLink image={bgVolunteer} name="VOLUNTEER" />
        <ImageLink image={bgDonate} name="DONATE" />
      </div>
      <h4>WHAT'S NEW</h4>
      <p>
        AbbeyCats is happy to announce that due to everyone's hard work we've
        been able to find homes for all of the kittens and mommy cats from the
        North Bay situation. Pictured below is Jade (the tri-coloured cat), one
        of the pregnant cats brought down from the North Bay shelter and has
        quickly settled into her new foster home.
      </p>
    </div>
  );
};

export default Home;
