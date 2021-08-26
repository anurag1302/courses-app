import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../APIs/API";
import "./styles.css";

const EditCourse = () => {
  const { id } = useParams();
  const history = useHistory();
  const emptyCourse = {
    id: "",
    courseName: "",
    courseContent: "",
    courseBook: "",
    noOfStudents: "",
    coordinatorName: "",
    createdOn: "",
  };
  const [courseData, setCourseData] = useState(emptyCourse);

  useEffect(() => {
    let apiUrl = `${API.GET_COURSE_BY_ID}${id}`;

    const fetchData = async () => {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourseData(data);
    };
    fetchData();
  }, [id]);

  console.log(history);
  return (
    <div className="edit-courses">
      <h1>Edit Course</h1>
      <form className="row g-3">
        <div className="col-md-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            value={courseData.id}
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseName}
            readOnly
          />
        </div>
        <div className="col-9">
          <label className="form-label">Course Content</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseContent}
            readOnly
          />
        </div>
        <div className="col-12">
          <label className="form-label">Course Book Img Url</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseBook}
            readOnly
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Number of students enrolled</label>
          <input
            type="text"
            className="form-control"
            value={courseData.noOfStudents}
            readOnly
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Coordinator Name</label>
          <input
            type="text"
            className="form-control"
            value={courseData.coordinatorName}
            readOnly
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Start Date</label>
          <input
            type="text"
            className="form-control"
            value={courseData.createdOn}
            readOnly
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        <div className="col-12">
          <button className="btn btn-dark" onClick={history.goBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
