import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "./Image.css"

function Image() {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdolHb_bs7_dvSeU08RagxKqBYQ7hv8devo4fUD502sinusRz82dGZ1fEhqF2X-yTXSQ&usqp=CAU"
        className="rounded-circle"
        alt="Avatar"
        style={{ borderRadius: "50%" }} // Added CSS for making the image round
      />
    </MDBContainer>
  );
}

export default Image;
