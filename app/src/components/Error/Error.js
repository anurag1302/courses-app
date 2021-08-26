import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  return (
    <div>
      <h2>Oops, page not found!!!</h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-dark" onClick={goBack}>
          Back to Courses
        </button>
      </div>
    </div>
  );
};

export default Error;
