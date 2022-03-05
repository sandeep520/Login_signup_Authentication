import { Form, Button } from "react-bootstrap";
import React from "react";
// import smsScdular from "../Component/smsScdular.jpg";
const Registration = () => {
  return (
    <>
      <div style={{display:'flex',marginLeft: '400px', width: "100%",height:'100%'}}>
        <div >
          <h3>Register✌️</h3>
          Already have an account?<a href="#">Sign In </a>
          <Form>
            <div class="row">
              <div class="col">
                <Button variant="primary" type="submit">
                  Google
                </Button>
              </div>
              <div class="col">
                <Button variant="primary" type="submit">
                  Facebook
                </Button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <label>Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Contact Number</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div class="col">
                <label>Email Address</label>

                <input
                  type="email"
                  class="form-control"
                  placeholder="Email ID"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Password</label>

                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="col">
                <label> Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </Form>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        {/* <div style={{ width: "80%" }}> */}
          {/* <img src={smsScdular} style={{width:'50%'}} alt="Logo" /> */}
        {/* </div> */}
      </div>
    </>
  );
};
export default Registration;