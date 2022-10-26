/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";

import CourseItems from "../CourseItems/CourseItems";

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <Categories></Categories>
          </Col>
          <Col lg="8">
            <CourseItems></CourseItems>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
<h5>this is courses</h5>;
