import React, { createContext } from "react";

import catsData from "./assets/cats_data";

const context = createContext(catsData);

export const CatsContextProvider = (props) => {
  return <context.Provider value={catsData}>{props.children}</context.Provider>;
};

export default context;
