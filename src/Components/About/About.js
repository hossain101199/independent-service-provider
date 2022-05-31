import React from "react";
import myimg from "../Images/myimg.png";
const About = () => {
  return (
    <div className="mt-3" style={{ minHeight: "80vh" }}>
      <div class="row align-items-center">
        <div class="col-md-6">
          <h5>Samiha Samad</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            praesentium harum impedit inventore voluptatem animi natus
            consectetur beatae dicta adipisci nihil, assumenda ad asperiores ea
            culpa fuga fugit, perspiciatis odit quas alias distinctio optio
            libero incidunt. Corrupti natus ex, perferendis sapiente magni sit
            voluptatum expedita, iure impedit possimus veniam quae.
          </p>
        </div>

        <div class="col-md-6">
          <img className="img-fluid" src={myimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
