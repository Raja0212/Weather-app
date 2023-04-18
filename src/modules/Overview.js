import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  // MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import "./Image.css";

export default function BlockquoteWithAvatar() {
  return (

    <div className="overview" style={{ backgroundColor: "#F8F8F8", border: "2px solid black" }}>

      <section className="vh-10">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100" >
            <MDBCol lg="0" xl="6">
              <MDBCard className="rounded-3">
                <MDBCardBody className="p-5">
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCardImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdolHb_bs7_dvSeU08RagxKqBYQ7hv8devo4fUD502sinusRz82dGZ1fEhqF2X-yTXSQ&usqp=CAU"
                      className="rounded-circle"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figure className="mb-0 text-center">
                    <MDBTypography blockquote className="mb-4">
                      <p>
                        <span className="font-italic">
                          It provides users with up-to-date weather information
                          for their desired location in a user-friendly and
                          responsive interface.<br/><br/>
                          - Raja Subramani at <cite title="Source Title">OneSight Technology</cite>
                        </span>
                      </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer">
                    </figcaption>
                  </figure>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </div>

      );
  }






