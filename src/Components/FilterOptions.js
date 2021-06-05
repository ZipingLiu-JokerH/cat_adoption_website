import React from "react";

// styles
import styles from "./FilterOptions.module.css";

// components
import { Formik, Field, Form } from "formik";

const FilterOptions = ({
  onClose: closeFilter,
  onApplyFilter: applyFilter,
}) => {
  return (
    <ul className={styles.filterOptions}>
      <li>
        AVAILABLE CATS
        {/* should have use raido button but since this functionality
        is currently disabled, i will use checkbox as a dummy replacement */}
        <br />
        <label htmlFor="all_cats">
          <input
            type="checkbox"
            id="all_cats"
            name="cats_group"
            value="all_cats"
            defaultChecked
          />
          <span>All Cats</span>
        </label>
        <br />
        <label htmlFor="bonded_pairs">
          <input
            type="checkbox"
            id="bonded_pairs"
            name="cats_group"
            value="bonded_pairs"
          />
          <span>Bonded Pairs</span>
        </label>
        <br />
        <label htmlFor="exotics">
          <input
            type="checkbox"
            id="exotics"
            name="cats_group"
            value="exotics"
          />
          <span>Exotics</span>
        </label>
        <br />
        <label htmlFor="special_cats">
          <input
            type="checkbox"
            id="special_cats"
            name="cats_group"
            value="special_cats"
          />
          <span>Special Cats</span>
        </label>
      </li>
      <li>
        <Formik
          initialValues={{
            cats_filter: [],
          }}
          onSubmit={async (values) => {
            closeFilter();
            applyFilter(values.cats_filter);
          }}
        >
          {({ values }) => (
            <Form>
              <div id="checkbox-group">FILTER BY</div>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                className={styles.filter_checkbox}
              >
                <label>
                  <Field type="checkbox" name="cats_filter" value="male" />
                  <span>Male</span>
                </label>
                <br />
                <label>
                  <Field type="checkbox" name="cats_filter" value="female" />
                  <span>Female</span>
                </label>
                <br />
                <label>
                  <Field
                    type="checkbox"
                    name="cats_filter"
                    value="short_hair"
                  />
                  <span>Short hair</span>
                </label>
                <br />
                <label>
                  <Field type="checkbox" name="cats_filter" value="long_hair" />
                  <span>Long hair</span>
                </label>
              </div>
              <button type="submit">APPLY FILTERS</button>
            </Form>
          )}
        </Formik>
      </li>
    </ul>
  );
};

export default FilterOptions;
