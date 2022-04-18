import React from "react";
import myimg from "../Images/myimg.png";
const About = () => {
  return (
    <div className="mt-3" style={{ minHeight: "80vh" }}>
      <div class="row align-items-center">
        <div class="col-md-6">
          <h5>Mohammad Hossain</h5>
          <p>
            I want to become a blockchain developer. I have already taken some
            steps to become a blockchain developer. it is important to know
            about web development to become a blockchain developer. for that, I
            enrolled in programming-hero web development course.I am determined
            to do what it takes to be a blockchain developer.
          </p>
        </div>

        <div class="col-md-6">
          <img src={myimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
