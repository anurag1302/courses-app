import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import API from "../APIs/API";

const CreateCourse = () => {
  const history = useHistory();
  const emptyCourse = {
    courseName: "",
    courseContent: "",
    courseBook: "",
    noOfStudents: "",
    coordinatorName: "",
    createdOn: "",
  };

  const [course, setCourse] = useState(emptyCourse);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCourse({ ...course, [name]: value });
  };

  const createCourse = async (e) => {
    e.preventDefault();

    let apiUrl = API.CREATE_COURSE;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log(data);
    history.push("/");
  };

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="create-new-course">
      <h2>Create Course</h2>
      <hr />
      <div className="container">
        <form className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              value={course.courseName}
              onChange={handleInput}
              name="courseName"
            />
          </div>
          <div className="row"></div>
          <div className="col-6">
            <label className="form-label">Course Content</label>
            <input
              type="text"
              className="form-control"
              value={course.courseContent}
              onChange={handleInput}
              name="courseContent"
            />
          </div>
          <div className="row"></div>
          <div className="col-6">
            <label className="form-label">Course Book Img Url</label>
            <input
              type="text"
              className="form-control"
              value={course.courseBook}
              onChange={handleInput}
              name="courseBook"
            />
          </div>
          <div className="row"></div>
          <div className="col-md-3">
            <label className="form-label">Number of students enrolled</label>
            <input
              type="text"
              className="form-control"
              value={course.noOfStudents}
              onChange={handleInput}
              name="noOfStudents"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Coordinator Name</label>
            <input
              type="text"
              className="form-control"
              value={course.coordinatorName}
              onChange={handleInput}
              name="coordinatorName"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={course.createdOn}
              onChange={handleInput}
              name="createdOn"
            />
          </div>
          <div className="row"></div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={createCourse}>
              Create
            </button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-info" onClick={goBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
