import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import RadioGroup from "./RadioGroup";

import styles from "./Form.module.css";

const PersonalInfoForm = ({ initVal, handleSaveForm, goPrevious, goNext }) => {
  return (
    <Formik
      initialValues={initVal}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleSaveForm(values);
          setSubmitting(false);
          goNext();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.myForm}>
          <label htmlFor="firstName">
            First Name
            <Field id="firstName" name="firstName" />
          </label>

          <label htmlFor="lastName">
            Last Name
            <Field id="lastName" name="lastName" />
          </label>

          <label htmlFor="age">
            Age
            <Field
              id="age"
              name="age"
              type="number"
              style={{ width: "3rem" }}
            />
          </label>

          <label htmlFor="addressLineOne">
            Address Line 1
            <Field id="addressLineOne" name="addressLineOne" type="address" />
          </label>

          <label htmlFor="addressLineTwo">
            Address Line 2
            <Field id="addressLineTwo" name="addressLineTwo" type="address" />
          </label>

          <RadioGroup
            groupid="isPR-group"
            question="Are you a permanent resident/citizen of Canada?"
            groupname="isPRorCitizen"
            choices={["Yes", "No"]}
          />

          <label htmlFor="postalCode">
            Postal Code
            <Field
              id="postalCode"
              name="postalCode"
              pattern="[a-zA-Z0-9]{6}"
              style={{ width: "6rem" }}
            />
          </label>

          <label htmlFor="phone">
            Phone number
            <Field id="phone" name="phone" type="tel" />
          </label>

          <label htmlFor="email">
            Email
            <Field id="email" name="email" type="email" />
          </label>

          <label htmlFor="occupation">
            Occupation
            <Field id="occupation" name="occupation" />
          </label>

          <label htmlFor="income">
            Household Income
            <Field id="income" name="income" />
          </label>

          <RadioGroup
            groupid="havePets-group"
            question="Do you currently have any pets?"
            groupname="havePets"
            choices={["Yes", "No"]}
            style={{ marginBottom: "2rem" }}
          />

          <div className={styles.actionButtons}>
            <button type="button" onClick={goPrevious}>
              BACK
            </button>
            <button type="submit" disabled={isSubmitting}>
              NEXT
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
