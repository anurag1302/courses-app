import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-div">
      <h2>Courses App</h2>
      <Link to="/createcourse">Create a Course</Link>
    </div>
  );
};

export default Header;
