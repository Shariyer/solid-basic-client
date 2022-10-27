/** @format */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const course = useLoaderData();
  return (
    <div className="w-lg-50 mx-auto">
      <Container className="w-75 ">
        <Row xs={1} md={2} lg={1} className="shadow my-5 rounded mb-3">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={course.id}>
              <Card className="my-3 ">
                <Card.Header>
                  <Card.Title className="fw-bolder">{course.name}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={course.Img} />
                <Card.Body>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-white">Author:{course.course_author}</p>
                    <p className="text-success d-block  mt-3 fw-bolder">
                      Price: {course.course_price}
                    </p>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Details;
