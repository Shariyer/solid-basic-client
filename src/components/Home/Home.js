/** @format */

import React from "react";
import { Carousel, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container p-1 px-3 py-5 rounded shadow text-white bg-dark bg-opacity-75">
      <div className="text-center d-flex justify-content-center align-items-center">
        <h1 className="fw-bolder  text-white px-4 py-4 rounded shadow ">
          Solid Basic
        </h1>
        <Image src="logo.png"></Image>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="cover.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="">Welcome To</h1>
            <span className="fs-1 fw-bolder border rounded px-4 bg-warning bg-opacity-75 text-white shadow">
              Solid Basic
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="cover.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3>
              {" "}
              <span className="fs-1 text-danger fw-bolder">
                Best quality Free courses
              </span>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="cover.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h1 className="">
              Basic
              <span className="fs-1 fw-bolder text-danger">
                Programming knowledge
              </span>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="cover.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h1 className="">
              And it's Perfect for{" "}
              <span className="text-danger fw-bolder">Beginners</span>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div className="d-lg-none d-block">
        <Categories></Categories>
      </div> */}
    </div>
  );
};

export default Home;
