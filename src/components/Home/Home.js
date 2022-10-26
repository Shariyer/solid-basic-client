/** @format */

import React from "react";
import { Container, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <Image src="logo.png"></Image>
          <h4 className="m-5">
            Welcome to{" "}
            <span className="fs-1 fw-bolder border rounded px-4 bg-warning bg-opacity-75 text-white shadow">
              Solid Basic
            </span>
          </h4>
        </div>
        <h1 className="m-5">
          Website where you can find the{" "}
          <span className="fs-1 text-danger fw-bolder">
            Best quality Free courses
          </span>
        </h1>
        <h1 className="m-5">
          To get started with{" "}
          <span className="fs-1 fw-bolder text-danger">
            Basic programming knowledge
          </span>
        </h1>
        <h1 className="m-5">
          And it's Perfect for{" "}
          <span className="text-danger fw-bolder">Beginners</span>
        </h1>
      </Container>
    </div>
  );
};

export default Home;
