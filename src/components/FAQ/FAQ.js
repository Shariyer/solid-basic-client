/** @format */

import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className=" w-75 mx-auto  rounded ">
      <Accordion className="mt-5 ">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 className="fw-bolder text-primary">Why Us???</h3>
          </Accordion.Header>
          <Accordion.Body>
            We are giving best quality courses as free. With our quality Course
            Instructors all the courses are well organized and florist.You will
            get the best course outline for sure.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 className="fw-bolder text-primary">How to get Started???</h3>
          </Accordion.Header>
          <Accordion.Body>
            Whether you want to create an app or customize web pages, it's
            prudent to to start by learning the basics of one primary
            programming language. And we giving a free opportunity to grab the
            best basic course you could ever find with superbly structured for
            any beginner friendly course. Grab our Course and fly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="fw-bolder text-primary">Why learn Programming??</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h5>1. Attractive salaries</h5>
            <p>
              The good news for computer programmers is that most jobs you'll be
              interested in with your new skills pay well. In fact, the median
              salary of a computer programmer in the U.S. stands at $86,550 per
              year. Of course, salaries may vary for entry-level positions.
              Because technology doesn't appear to be slowing down any time
              soon, learning to program also has the ability to increase your
              earning potential. Over time, you could get a raise, explore other
              career opportunities, or start your own side hustle, for instance.
              Jumpstart your way to the skills you need for a new career by
              starting a coding bootcamp.
            </p>
            <h5>2. Have valuable skills on your resume</h5>
            Computer programming is a desirable skill because so much of our
            world is automated online. As a computer programmer, you will write
            and test code to create websites and software programs or to keep
            programs running and functioning well. Your goal is to innovate and
            continuously improve upon existing processes.
            <h5>3. Work from anywhere</h5>
            <p>
              Technology jobs especially within the emerging startup culture are
              well known for their flexibility and perks. Depending on the
              company, this could look like unlimited vacation time,
              telecommuting from another state or country, or work from home
              capabilities.{" "}
            </p>
            <h5>4. Choose from many job offers</h5>
            <p>
              There are plenty of programming jobs for you to pursue in the
              world of technology. Perhaps you'd like to spend entire days
              writing code from home. You can do that! You can also use your
              programming knowledge to drive business decisions. Some popular
              jobs that require coding are software application developers, web
              developers, and computer systems engineers. See careers for
              computer programmers to explore more options.
            </p>
            <h5>5. Flex hours</h5>
            <p>
              Many programmers work flexible hours since all they need is a
              laptop and an internet connection. Companies usually have core
              hours where the team is required to log on for collaboration and
              meetings. Tech companies that implement flex hours are less
              concerned with where you are, but rather that you get your work
              done. If you are a self-motivated high achiever who doesn't do
              well with micromanaging, you may love this perk.
            </p>
            <h5>6. Express your creativity</h5>
            <p>
              To expand, when programmers are tasked with a problem, it's up to
              them to come up with a solution. They start with a blank screen.
              With the big picture in mind, they use both creative
              problem-solving and logical thinking. Understanding your preferred
              coding language and how it relates to the task at hand forces you
              to delve head first into a problem and solve for the best outcome.
              Every time you face a new challenge, you get to solve yet another
              problem.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
