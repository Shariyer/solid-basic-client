/** @format */

import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="border rounded w-75 mx-auto p-5 shadow bg-dark bg-opacity-25">
      <Container>
        <div className="border rounded p-3 mb-3">
          <h3>
            Why are we using firebase? What other options do you want to
            implement?
          </h3>
          <p>
            Ans:By giving safe access to the database directly from client-side
            code, the Firebase Realtime Database enables you to create complex,
            collaborative apps. Data is saved locally, and realtime events
            continue to trigger even when the user is offline, providing a
            responsive experience. It is Scale across multiple
            databases,Accessible from Client Devices,Realtime,Offline. Other
            authentication systems I want to learn The Okta Identity
            Could,Microsoft Azure Active Directory etc.
          </p>
        </div>
        <div className="border rounded p-3 mb-3">
          <h3>What is cors?</h3>
          <p>
            Ans: Cors is stands for cross origin recourse sharing.If we want to
            share data in two different platform we need cprsThe CORS mechanism
            allows browsers and servers to make safe cross-origin requests and
            data transfers.
          </p>
        </div>
        <div className="border rounded p-3 mb-3">
          <h3>How does Private route work?</h3>
          <p>
            Ans: To use Private route we need to put any components inside the
            Private route component as child.
          </p>
        </div>
        <div className="border rounded p-3 mb-3">
          <h3>What is Node? How does Node works??</h3>
          <p>
            Ans: Node is a run time environment where we can run javascript
            codes without browser. Node works on Javascript V8 engine.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
