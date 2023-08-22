import React from "react";
import load from "./load.gif";

const Spinner = () => {
  return (
    <div className="d-flex" style={{ justifyContent: "center" }}>
      <img src={load} alt="load" />
    </div>
  );
};
export default Spinner;
