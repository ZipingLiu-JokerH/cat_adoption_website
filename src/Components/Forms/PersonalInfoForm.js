import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikErrorFocus from "formik-error-focus";

import RadioGroup from "./RadioGroup";
import InputError from "./InputError";
import styles from "./Form.module.css";

const PersonalInfoForm = ({ initVal, handleSaveForm, goPrevious, goNext }) => {
  return (
    <Formik
      initialValues={initVal}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.age) {
          errors.age = "Required";
        } else if (parseInt(values.age) <= 0) {
          errors.age = "age should be greater than zero";
        }
        if (!values.addressLineOne) {
          errors.addressLineOne = "Required";
        }
        if (!values.postalCode) {
          errors.postalCode = "Required";
        }
        if (!values.phone) {
          errors.phone = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.occupation) {
          errors.occupation = "Required";
        }
        if (!values.income) {
          errors.income = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleSaveForm(values);
          setSubmitting(false);
          goNext();
        }, 400);
      }}
    >
      {({ isSubmitting, values, errors, touched }) => (
        <Form className={styles.myForm}>
          <label htmlFor="firstName">
            First Name
            <Field
              id="firstName"
              name="firstName"
              className={
                touched.firstName && errors.firstName ? styles.has_error : null
              }
            />
            <ErrorMessage name="firstName" component={InputError} />
          </label>

          <label htmlFor="lastName">
            Last Name
            <Field
              id="lastName"
              name="lastName"
              className={
                touched.lastName && errors.lastName ? styles.has_error : null
              }
            />
            <ErrorMessage name="lastName" component={InputError} />
          </label>

          <label htmlFor="age">
            Age
            <Field
              id="age"
              name="age"
              type="number"
              style={{ width: "3rem" }}
              className={touched.age && errors.age ? styles.has_error : null}
            />
            <ErrorMessage name="age" component={InputError} />
          </label>

          <label htmlFor="addressLineOne">
            Address Line 1
            <Field
              id="addressLineOne"
              name="addressLineOne"
              type="address"
              className={
                touched.addressLineOne && errors.addressLineOne
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="addressLineOne" component={InputError} />
          </label>

          <label htmlFor="addressLineTwo">
            Address Line 2 (optional)
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
              className={
                touched.postalCode && errors.postalCode
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="postalCode" component={InputError} />
          </label>

          <label htmlFor="phone">
            Phone number
            <Field
              id="phone"
              name="phone"
              type="tel"
              className={
                touched.phone && errors.phone ? styles.has_error : null
              }
            />
            <ErrorMessage name="phone" component={InputError} />
          </label>

          <label htmlFor="email">
            Email
            <Field
              id="email"
              name="email"
              type="email"
              className={
                touched.email && errors.email ? styles.has_error : null
              }
            />
            <ErrorMessage name="email" component={InputError} />
          </label>

          <label htmlFor="occupation">
            Occupation
            <Field
              id="occupation"
              name="occupation"
              className={
                touched.occupation && errors.occupation
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="occupation" component={InputError} />
          </label>

          <label htmlFor="income">
            Household Income
            <Field
              id="income"
              name="income"
              className={
                touched.income && errors.income ? styles.has_error : null
              }
            />
            <ErrorMessage name="income" component={InputError} />
          </label>

          <RadioGroup
            groupid="havePets-group"
            question="Do you currently have any pets?"
            groupname="havePets"
            choices={["Yes", "No"]}
            style={{ marginBottom: "2rem" }}
          />

          <div className={styles.actionButtons}>
            <button
              type="button"
              onClick={() => {
                handleSaveForm(values);
                goPrevious();
              }}
            >
              BACK
            </button>
            <button type="submit" disabled={isSubmitting}>
              NEXT
            </button>
          </div>
          <FormikErrorFocus
            offset={0}
            align={"middle"}
            focusDelay={200}
            ease={"linear"}
            duration={500}
          />
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
