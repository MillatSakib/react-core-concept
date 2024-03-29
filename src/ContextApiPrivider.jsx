import React, { useContext } from "react";
import { AssetContext } from "./ContextApiProvider";

const ContextApiPrivider = () => {
  const abc = useContext(AssetContext);
  return <div>The value of assetcontext is {abc}</div>;
};

export default ContextApiPrivider;
