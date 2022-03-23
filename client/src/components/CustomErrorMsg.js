import React from "react";
import { ErrorMessage } from "formik";

const CustomErrorMsg = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <br />
      <ErrorMessage name={name} />
    </div>
  );
};

export default CustomErrorMsg;
