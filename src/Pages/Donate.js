import React from "react";

// assets
import logo_love from "../assets/logo_love.svg";

// styles
import styles from "./Donate.module.css";

const Donate = () => {
  return (
    <div className="page_container">
      <div className={styles.donate_headline}>
        <div className={styles.headline_quote}>
          <h1>Donateions</h1>
          <div className={styles.quote}>
            <q>
              Saving one cat will not change the world, but surely for that one
              cat, the world will change forever
            </q>
            <cite> - Karen Davidson</cite>
          </div>
        </div>
        <div className={`${styles.logo_love_container} ${styles.desktop}`}>
          <img src={logo_love} alt="" />
        </div>
      </div>

      <p>
        Abbey Cat Adoptions is a registered charity dedicated to finding
        permanent homes for unwanted cats and kittens. Unlike most animal
        shelters, we have a "zero euthanasia policy". This means that no cat in
        our program is ever "put-down" due to old age, lack of space, or
        adoptability. Every Abbey Cat is guaranteed a safe, loving foster home,
        quality food and veterinary care until they are permanently placed with
        a carefully screened adopter.
      </p>
      <p>
        Abbey Cats is an entirely volunteer-based charity that relies
        exclusively on the generosity of like-minded animal lovers who believe
        that every cat has the right to a safe and loving permanent home; we are
        not government funded. Because ACA is based exclusively out of foster
        homes and has no overhead expenses, 100 percent of every donation goes
        directly towards food and medical care (when needed) for the animals.
      </p>
      <p>
        In an effort to continue rescuing cats and kittens, Abbey Cat Adoptions
        is desperately seeking your support. Any donation, no matter how small,
        will help us in covering the cost of care for the more than 100 animals
        currently in our foster program. Donating to ACA is a great way to help
        if you are unable to foster or adopt at this time and will give you the
        satisfaction of knowing that you helped to save the life of an animal
        who would have not otherwise had a second chance at life. Every donation
        over $15 is tax deductible.
      </p>
      <div className={`${styles.logo_love_container} ${styles.mobile}`}>
        <img src={logo_love} alt="" />
      </div>
      <h6>Think about how you could impact a life with your donation.</h6>
      <button className={styles.action_button}>DONATE</button>
    </div>
  );
};

export default Donate;
