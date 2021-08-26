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
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [students, setStudents] = useState(0);
  const [trainerName, setTrainerName] = useState("");

  useEffect(() => {
    let apiUrl = `${API.GET_COURSE_BY_ID}${id}`;

    const fetchData = async () => {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourseData(data);
    };
    fetchData();
  }, [id]);

  const updateContent = (value) => {
    setContent(value);
    courseData.courseContent = value;
  };

  const updateButtonClick = async (e) => {
    e.preventDefault();

    let apiUrl = API.UPDATE_COURSE;

    let updateObject = {
      id: id,
      courseContent: content ? content : courseData.courseContent,
      courseBook: url ? url : courseData.courseBook,
      noOfStudents: students ? students : courseData.noOfStudents,
      coordinatorName: trainerName ? trainerName : courseData.coordinatorName,
      createdOn: new Date(),
    };
    // if (
    //   !updateObject.courseContent &&
    //   !updateObject.courseBook &&
    //   !updateObject.noOfStudents &&
    //   !updateObject.coordinatorName
    // ) {
    //   alert("Please update any value on the form !!!");
    //   return;
    // }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateObject),
    };
    console.log("hii");
    console.log(updateObject);

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log(data);
    history.push("/");
  };
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
            onChange={(e) => {
              updateContent(e.currentTarget.value);
            }}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Course Book Img Url</label>
          <input
            type="text"
            className="form-control"
            value={courseData.courseBook}
            onChange={(e) => {
              setUrl(e.currentTarget.value);
              courseData.courseBook = e.currentTarget.value;
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Number of students enrolled</label>
          <input
            type="text"
            className="form-control"
            value={courseData.noOfStudents}
            onChange={(e) => {
              setStudents(e.currentTarget.value);
              courseData.noOfStudents = e.currentTarget.value;
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Coordinator Name</label>
          <input
            type="text"
            className="form-control"
            value={courseData.coordinatorName}
            onChange={(e) => {
              setTrainerName(e.currentTarget.value);
              courseData.coordinatorName = e.currentTarget.value;
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Start Date</label>
          <input
            type="text"
            className="form-control"
            value={new Date(courseData.createdOn).toDateString()}
            readOnly
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            onClick={(e) => updateButtonClick(e)}
          >
            Update
          </button>
        </div>
      </form>
      <div className="col-12">
        <button className="btn btn-dark" onClick={history.goBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditCourse;
