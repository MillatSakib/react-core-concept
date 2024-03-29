import React, { createContext } from "react";
import ContextApiPrivider from "./ContextApiPrivider";

export const AssetContext = createContext("");

const ContextApiProvider = () => {
  return (
    <div>
      <AssetContext.Provider value="I am a student of Programming hero">
        <ContextApiPrivider></ContextApiPrivider>
      </AssetContext.Provider>
    </div>
  );
};

export default ContextApiProvider;
