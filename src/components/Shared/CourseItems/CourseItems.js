/** @format */

import Card from "react-bootstrap/Card";

import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";

const CourseItems = () => {
  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        SetCourses(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {courses.map((c) => (
        // <CardGroup>
        //   <Card>
        //     <Card.Img variant="top" src={c.Img} />
        //     <Card.Body>
        //       <Card.Title>{c.title}</Card.Title>
        //       <Card.Text>{c.description}</Card.Text>
        //     </Card.Body>
        //     <Card.Footer>
        //       <Button className="btn btn-primary">Details</Button>
        //     </Card.Footer>
        //   </Card>
        // </CardGroup>
        <div className="my-4 d-flex justify-content-center">
          <Row xs={1} md={2} lg={1} className="g-4 shadow my-5">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={c.id}>
                <Card>
                  <Card.Img variant="top" src={c.Img} />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Text>
                      {c.description.slice(0, 100) + "...Read more"}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-dark">
                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink
                        to={`singleCourse/${c.id}`}
                        className="btn btn-primary d-block"
                      >
                        Details
                      </NavLink>
                      <NavLink
                        to={`premium/${c.id}`}
                        className="btn btn-warning d-block text-white px-1"
                      >
                        Get Premium Access
                      </NavLink>
                      <p className="text-success d-block  mt-3">
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
