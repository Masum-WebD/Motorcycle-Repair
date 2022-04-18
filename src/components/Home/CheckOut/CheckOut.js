import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {

    const handleCheck= async(e)=>{
        e.preventDefault();  
            toast("Thanks for pick up our service");
    }
  return (
    <div>
      <Form onSubmit={handleCheck}   className="form-container mt-5 w-50 mx-auto">
        <Form.Group   className="mb-3 " controlId="formBasicEmail">
          <Form.Control name='name' type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Button className='w-50 d-block mx-auto fw-bold' variant="primary" type="submit">
          Confirm pick up
        </Button>
      </Form>
      <ToastContainer/>
    </div>
  );
};

export default CheckOut;
