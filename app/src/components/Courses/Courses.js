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

  return (
    <div className="courses-div">
      {courses.map((item) => {
        const link = `/edit/${item.id}`;
        return (
          <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src={item.courseBook} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.courseName}</h5>
              <p className="card-text">{item.courseContent}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Course Coordinator : {item.coordinatorName}
              </li>
              <li className="list-group-item">
                Students Enrolled : {item.noOfStudents}
              </li>
              <li className="list-group-item">
                Start Date: {new Date(item.createdOn).toDateString()}
              </li>
            </ul>
            <div className="card-body">
              <Link to={link}>Edit</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
