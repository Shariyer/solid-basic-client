/** @format */

import Card from "react-bootstrap/Card";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

import Pdf from "react-to-pdf";
const ref = React.createRef();

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
    <div className="">
      <h2 className="text-center fw-bolder">
        All Programmes (Download if needed)
      </h2>
      {courses.map((c) => (
        <div className="mx-5">
          <Row xs={1} md={2} lg={1} className="shadow my-5 rounded mb-3">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={c.id}>
                <Card className="my-3 ">
                  <Card.Header className="bg-dark py-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <Card.Title className=" text-white  fw-bolder">
                        {c.name}
                      </Card.Title>
                      <h3 className="text-end">
                        <Pdf targetRef={ref} filename="CourseDetails.pdf">
                          {({ toPdf }) => (
                            <button
                              className="btn btn-outline-warning shadow fw-bolder mt-3"
                              onClick={toPdf}
                            >
                              <FaFileDownload className="fs-4 mb-1" /> DownLoad
                              PDF
                            </button>
                          )}
                        </Pdf>
                      </h3>
                    </div>
                  </Card.Header>
                  <Card.Img variant="top" src={c.Img} />

                  <div ref={ref}>
                    <Card.Body>
                      <Card.Title className=" text-dark  fw-bolder">
                        Course:{c.name}
                      </Card.Title>
                      <Card.Text>{c.description}</Card.Text>
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
                  </div>
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
