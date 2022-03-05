import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");

    
  return (
   <>

<div className="p-4 box" style={{width:'400px', marginLeft:'33%'}}>
        <h2 className="mb-3">Firebase  Change password</h2>
        <Form>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>


          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Change Password
            </Button>
          </div>
        </Form>
        <hr />

      </div>
      

   
   </>
  )
}

export default ForgotPassword