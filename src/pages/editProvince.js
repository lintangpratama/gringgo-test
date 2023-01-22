import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditProvince() {
  const { id } = useParams();
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
      axios.post(
        `http://34.101.172.140:3005/api/propinsi/update/?id_prov=${id}`,
        {
          name: inputFields.name,
        }
      );
      Swal.fire("Provinsi telah diubah!", "", "success");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`)
        .then((res) => {
          setInputFields({ ...inputFields, name: res.data.data[0].name });
        })
        .catch((err) => err);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              value={inputFields.name}
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
