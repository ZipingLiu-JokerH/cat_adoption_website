import React from "react";

//styles
import styles from "./CatCard.module.css";

// assets
import maleSign from "../assets/Male_tag.svg";
import femaleSign from "../assets/Female_tag.svg";

const dateFormateOption = { year: "numeric", month: "short", day: "numeric" };

const CatCard = ({ catImage, name, gender, dateOfBirth, breed }) => {
  return (
    <div className={styles.cat_card}>
      <div className={styles.catImage_container}>
        <img src={catImage} alt={name} />
      </div>
      <div className={styles.cat_info}>
        <div>
          {name}
          {gender === "male" ? (
            <img src={maleSign} alt="male cat" />
          ) : (
            <img src={femaleSign} alt="female cat" />
          )}
        </div>
        <div>
          DOB:
          {new Date(dateOfBirth).toLocaleDateString("en-US", dateFormateOption)}
        </div>
        <div>Breed: {breed}</div>
      </div>
    </div>
  );
};

export default CatCard;
