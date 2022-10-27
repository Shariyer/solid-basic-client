/** @format */

import Card from "react-bootstrap/Card";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

const CourseItems = () => {
  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        SetCourses(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="text-center fw-bolder">
        All Programmes (Download if needed)
      </h2>
      {courses.map((c) => (
        <div className="d-flex  justify-content-center">
          <Row xs={1} md={2} lg={1} className="shadow my-5 rounded mb-3">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={c.id}>
                <Card className="my-3 ">
                  <Card.Header className="bg-dark py-2">
                    <h3 className="text-end">
                      <button className="btn btn-outline-warning shadow fw-bolder mt-3">
                        <FaFileDownload className="fs-4 mb-1" /> DownLoad PDF{" "}
                      </button>
                    </h3>
                  </Card.Header>
                  <Card.Img variant="top" src={c.Img} />
                  <Card.Body>
                    <Card.Title className="fw-bolder">{c.name}</Card.Title>
                    <Card.Text>
                      {c.description.slice(0, 100) + "...Read more"}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-dark">
                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink
                        to={`singleCourse/${c.id}`}
                        className="btn btn-primary d-block fw-bolder"
                      >
                        Details
                      </NavLink>
                      <NavLink
                        to={`premium/${c.id}`}
                        className="btn btn-warning d-block text-white px-1 fw-bolder"
                      >
                        Get Premium Access
                      </NavLink>
                      <p className="text-success d-block  mt-3 fw-bolder">
                        Price: {c.course_price}
                      </p>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default CourseItems;
