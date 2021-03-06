import React, { useState, useEffect } from "react";
import API from "../APIs/API";
import "./styles.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let apiUrl = API.ALL_COURSES_API;

    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCourses(data);
    };
    fetchData();
  }, []);

  const deleteCourse = async (e, id) => {
    e.preventDefault();

    let decision = window.confirm(
      "Are you sure you want to delete the course?"
    );

    if (!decision) {
      return;
    } else {
      let apiUrl = `${API.DELETE_COURSE}${id}`;
      const requestOptions = {
        method: "DELETE",
      };

      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      console.log(data);
      window.location.reload();
    }
  };

  return (
    <div className="courses-div">
      {courses.map((item) => {
        const link = `/edit/${item.id}`;
        return (
          <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src={item.courseBook} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.courseName}</h5>
              <p className="card-text">
                <em>{item.courseContent}</em>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Coordinator : <strong>{item.coordinatorName}</strong>
              </li>
              <li className="list-group-item">
                Students Enrolled : <strong>{item.noOfStudents}</strong>
              </li>
              <li className="list-group-item">
                Start Date :
                <strong>{new Date(item.createdOn).toDateString()}</strong>
              </li>
            </ul>
            <div className="card-body">
              <Link className="btn btn-primary" to={link}>
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  deleteCourse(e, item.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
