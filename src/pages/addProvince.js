import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddProvince() {
  const [inputFields, setInputFields] = useState({});

  const inputHandler = (e) => {
    const getInputAttribute = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputAttribute]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!inputFields.name) {
      Swal.fire("Kamu belum melengkapi semua data. Yuk, lengkapi dulu!");
    } else {
      axios.post("http://34.101.172.140:3005/api/propinsi/add", {
        id: Math.floor(Math.random() * 100),
        name: inputFields.name,
      });
      Swal.fire("Provinsi telah ditambahkan!", "", "success");
      window.location.href = "/";
    }
  };
  return (
    <div>
      <Container>
        {/* Heading */}
        <div>
          <h2 className="mt-5 mb-5">Create Product</h2>
        </div>
        {/* Form start */}
        <Form className="mt-5" method="POST">
          <Form.Group className="mb-3">
            <Form.Label>Province Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Input province name"
              onChange={inputHandler}
            />
          </Form.Group>
          <Button
            className="mt-3 mb-5"
            variant="dark"
            type="submit"
            onSubmit={submitFormHandler}
            onClick={submitFormHandler}
          >
            Submit
          </Button>
        </Form>
        {/* Form end */}
      </Container>
    </div>
  );
}
