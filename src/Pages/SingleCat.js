import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import context from "../CatsContext";

// assets
import share from "../assets/share.png";

import styles from "./SingleCat.module.css";

import CatCarousel from "../Components/CatCarousel";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const SingleCat = () => {
  const { name } = useParams();
  const [catData] = useContext(context).filter((cat) => cat.name === name);
  const [showInfo, setShowInfo] = useState(true);

  const introParagraphs = catData.intro
    .split("\n")
    .filter((i) => i.length !== 0)
    .map((i) => i.trim());
  const catBio = introParagraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const catInfo = (
    <>
      <span>{name}</span>
      <table>
        <tbody>
          <tr>
            <td>Sex:</td>
            <td>{capitalizeFirstLetter(catData.gender)}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              {new Date(
                new Date() - new Date(catData.dateOfBirth)
              ).getFullYear() - 1970}
            </td>
          </tr>
          <tr>
            <td>DOB:</td>
            <td>{catData.dateOfBirth}</td>
          </tr>
          <tr>
            <td>Colour:</td>
            <td>{catData.color}</td>
          </tr>
          <tr>
            <td>Breed:</td>
            <td>{catData.breed}</td>
          </tr>
          <tr>
            <td>Special Notes:</td>
            <td>{catData.specialNotes || "None"}</td>
          </tr>
          <tr>
            <td>Spay/Neuter:</td>
            <td>{catData.isSpayOrNeuter ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Special Needs:</td>
            <td>{catData.specialNeeds || "None"}</td>
          </tr>
          <tr>
            <td>Microchipped:</td>
            <td>{catData.isMicrochipped ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Vaccinated:</td>
            <td>{catData.isVaccinated ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Good With Kids:</td>
            <td>{catData.goodWithKids}</td>
          </tr>
          <tr>
            <td>Good With Dogs:</td>
            <td>{catData.goodWithDogs}</td>
          </tr>
          <tr>
            <td>Good With Cats:</td>
            <td>{catData.goodWithCats}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <div className="page_container">
      <CatCarousel images={catData.images} catName={name} />
      <button className={styles.primary_button}>
        ADOPT {name.toUpperCase()}
      </button>
      <div className={styles.infoButton_container}>
        <button
          className={!showInfo ? styles.active : ""}
          onClick={() => setShowInfo(false)}
        >
          BIO
        </button>
        <button
          className={showInfo ? styles.active : ""}
          onClick={() => setShowInfo(true)}
        >
          INFO
        </button>
      </div>
      <div className={styles.info_container}>{showInfo ? catInfo : catBio}</div>
      <button className={styles.secondary_button}>
        SHARE <img src={share} alt="share" />
      </button>
    </div>
  );
};

export default SingleCat;
