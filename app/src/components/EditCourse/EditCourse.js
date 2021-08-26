import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../APIs/API";
import Utils from "../Utils/Utils";
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

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCourseData({ ...courseData, [name]: value });
  };

  const updateButtonClick = async (e) => {
    e.preventDefault();

    let apiUrl = API.UPDATE_COURSE;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
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
    <div className="edit-courses">
      <h2>Edit Course</h2>
      <hr />
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseName}
            name="courseName"
            readOnly
          />
        </div>
        <div className="col-9">
          <label className="form-label">Course Content</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseContent}
            name="courseContent"
            onChange={handleInput}
          />
        </div>
        <div className="col-9">
          <label className="form-label">Course Book Img Url</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseBook}
            name="courseBook"
            onChange={handleInput}
          />
        </div>
        <div className="row"></div>
        <div className="col-md-3">
          <label className="form-label">Number of students enrolled</label>
          <input
            type="text"
            className="form-control"
            value={courseData.noOfStudents}
            name="noOfStudents"
            onChange={handleInput}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Coordinator Name</label>
          <input
            type="text"
            className="form-control"
            value={courseData.coordinatorName}
            name="coordinatorName"
            onChange={handleInput}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={Utils.formatDate(courseData.createdOn)}
            name="createdOn"
            onChange={handleInput}
          />
        </div>
        <div className="row"></div>
        <div className="col-md-1">
          <button
            className="btn btn-primary"
            onClick={(e) => updateButtonClick(e)}
          >
            Update
          </button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-info" onClick={goBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
