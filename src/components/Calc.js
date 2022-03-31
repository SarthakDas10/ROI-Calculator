import React, { useState } from "react";
import { Button, Card, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Calc.css";

const Calc = () => {
  const [text, setText] = useState(false);
  console.log(text);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="crd d-flex flex-wrap" style={{ borderRadius: "1rem" }}>
          <Card.Body>
            <div
              className="d-flex justify-content-end"
              style={{
                fontSize: "3rem",
                WebkitTextStroke: "8px white",
                marginBottom: "0px",
              }}
            >
              <i className="fa fa-close"></i>
            </div>
            <Card.Title style={{ fontSize: "1.7rem", fontWeight: "bolder" }}>
              ROI Calculator
            </Card.Title>

            <Form>
              <div className="d-flex justify-content-end">
                <span>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png"
                    alt="CakeIMG"
                    style={{
                      borderRadius: "3rem",
                      width: "0.9rem",
                      marginRight: "0.6rem",
                      background: "blue",
                    }}
                  />
                  <label>Cake</label>
                </span>
                <span className="usd" style={{ marginLeft: "1rem" }}>
                  <Form.Check type="switch" id="custom-switch" label="USD" />
                </span>
              </div>
            </Form>

            <Card
              className=" my-2 "
              style={{ borderRadius: "0.6rem", backgroundColor: "#f9fafc" }}
            >
              <div className="d-flex justify-content-end  align-items-center">
                <h4 className="mt-3 px-2">
                  <b>2.10000 CAKE</b>
                </h4>
              </div>
            </Card>

            <div className="d-flex flex-wrap justify-content-between">
              <Navbar>
                <div className="d-flex flex-wrap justify-content-between">
                  <Nav className="" variant="pills">
                    <Nav.Link href="#balance" className="bttnn px-4  ">
                      USE BALANCE
                    </Nav.Link>
                    <Nav.Link href="#1000" className="bttnn px-4">
                      $1000
                    </Nav.Link>
                    <Nav.Link href="#100" className="bttnn px-4">
                      $100
                    </Nav.Link>
                  </Nav>
                </div>
              </Navbar>
              <span className="py-2">~$20.82</span>
            </div>

            <Card.Subtitle
              className="my-2 "
              style={{ fontWeight: "bolder", fontSize: "1.2rem" }}
            >
              Timeframe
            </Card.Subtitle>

            <Navbar>
              <Container>
                <Nav
                  className="me-auto"
                  variant="pills"
                  style={{ fontSize: "15px" }}
                >
                  <div className="d-flex flex-wrap justify-content-between">
                    <Nav.Link href="#1day" className="bttn px-4  ">
                      1 Day
                    </Nav.Link>
                    <Nav.Link href="#7day" className="bttn px-4">
                      7 Days
                    </Nav.Link>
                    <Nav.Link href="#30 days" className="bttn px-4">
                      30 Days
                    </Nav.Link>
                    <Nav.Link href="#1 year" className="bttn px-4">
                      1 Year
                    </Nav.Link>
                    <Nav.Link href="#5 years" className="bttn px-4">
                      5 Years
                    </Nav.Link>
                  </div>
                </Nav>
              </Container>
            </Navbar>
            <div className="d-flex  justify-content-between">
              <Card.Subtitle
                className="my-2 "
                style={{ fontWeight: "bolder", fontSize: "1.2rem" }}
              >
                Enable Accelerated APY
              </Card.Subtitle>
              <span
                style={{
                  marginLeft: "1rem",
                  //   marginTop: "0.5rem",
                  fontSize: "1.4rem",
                }}
              >
                <Form.Check type="switch" id="custom-switch" />
              </span>
            </div>

            <div className="mt-4">
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "1rem" }}
              >
                Select Tier
              </Card.Subtitle>
            </div>

            <Navbar>
              <Nav
                className="me-auto "
                variant="pills"
                style={{ fontSize: "14px" }}
              >
                <div className="d-flex flex-wrap justify-content-between">
                  <Nav.Link href="#Tier 1" className="bttn px-4 mx-2 ">
                    Tier 1
                  </Nav.Link>
                  <Nav.Link href="#Tier 2" className="bttn px-4 mx-2 ">
                    Tier 2
                  </Nav.Link>
                  <Nav.Link href="#Tier 3" className="bttn px-4 mx-2 ">
                    Tier 3
                  </Nav.Link>
                  <Nav.Link href="#Tier 4" className="bttn px-4 mx-2 ">
                    Tier 4
                  </Nav.Link>
                  <Nav.Link href="#Tier 5" className="bttn px-4 mx-2 ">
                    Tier 5
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar>
            <div className="mt-2 d-flex justify-content-end">
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "1rem" }}
              >
                ROI at Current Rates
              </Card.Subtitle>
            </div>
            <Card
              className=" my-2 "
              style={{ borderRadius: "0.6rem", backgroundColor: "#f9fafc" }}
            >
              <div className="d-flex justify-content-between  align-items-center">
                <i
                  className="fa-light fas fa-pencil"
                  style={{ marginLeft: "1rem" }}
                ></i>
                <h4 className="mt-3 px-2">
                  <b>100.0 USD</b>
                </h4>
              </div>
            </Card>

            <div className="mt-2 d-flex justify-content-end">
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "0.9rem" }}
              >
                ~3CAKE + 10 DON
              </Card.Subtitle>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly ">
              <Button
                variant="outline-secondary"
                className="py-2"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                  borderRadius: "10px",
                }}
              >
                Apply
              </Button>
              <Button
                variant="outline-secondary"
                className="py-2"
                style={{
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                  borderRadius: "10px",
                }}
              >
                Cancel
              </Button>
            </div>
            <div
              className="d-flex justify-content-center py-4"
              onClick={() => {
                setText(!text);
              }}
            >
              {text ? (
                <>
                  Hide Details
                  <i
                    className="fa fa-chevron-down px-3"
                    style={{ marginTop: "5px" }}
                  ></i>
                </>
              ) : (
                <>
                  Show Details
                  <i
                    className="fa fa-chevron-down px-3 mt-1"
                    // style={{ marginTop: "5px" }}
                  ></i>
                </>
              )}
            </div>

            {text && (
              <>
                <div className=" d-flex justify-content-between">
                  <b>APY</b>{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1.35rem",
                      color: "#fac304",
                    }}
                  >
                    63.34%
                  </span>
                </div>

                <div>
                  <ul key={Math.random() * 100}>
                    <li>
                      <Card.Subtitle className="mb-2 text-muted">
                        Calculated based on current rates
                      </Card.Subtitle>
                    </li>
                    <li>
                      <Card.Subtitle className="mb-2 text-muted">
                        All figures are estimates provided for your convenience
                        only, and by no means represent guaranted returns.
                      </Card.Subtitle>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Calc;
