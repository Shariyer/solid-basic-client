/** @format */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const allCourses = useLoaderData();
  const premium = allCourses.premium;

  return (
    <div className="w-lg-50 mx-auto">
      <Container className="w-75 ">
        <Row xs={1} md={2} lg={1} className="shadow my-5 border rounded pt-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={allCourses.id}>
              <Card.Header className="bg-dark  rounded">
                <h3 className="text-center fw-bolder text-success p-4">
                  Premium Services
                </h3>
              </Card.Header>
              <Card className="my-3 ">
                <Card.Body className="border rounded p-4">
                  <Card.Title className="fw-bolder">{premium.name}</Card.Title>
                  <li className="fs-4 text-warning fw-bold">
                    {premium.access}
                  </li>
                  <li className="fs-4 text-warning fw-bold">
                    {premium.support}
                  </li>
                  <li className="fs-4 text-warning fw-bold">
                    {premium.advanceCourse}
                  </li>
                  <li className="fs-4 text-warning fw-bold">
                    {premium.coding}
                  </li>
                  <li className="fs-4 text-warning fw-bold">
                    {premium.premium_price}
                  </li>
                </Card.Body>
                <Card.Footer className="bg-dark p-4 ">
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-success text-white d-block rounded fw-bolder px-4 py-2">
                      Get Premium Access Now
                    </button>
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

export default Premium;
