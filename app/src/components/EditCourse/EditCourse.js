import React from "react";
import { useHistory, useParams } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>Edit Course</h1>
      <p>the passed id parameter is :- {id}</p>
      <button className="btn btn-outline-info" onClick={history.goBack}>
        Back
      </button>
    </div>
  );
};

export default EditCourse;
