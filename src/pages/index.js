import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const deleteHandler = (id) => {
  Swal.fire({
    title: "Are you sure?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      axios.post("http://34.101.172.140:3005/api/propinsi/delete", {
        id_prov: id,
      });
      Swal.fire("Deleted!", "", "success");
      window.location.reload();
    }
  });
};

const columns = [
  {
    name: "Provinsi",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => (
      <>
        <Link to={`/edit-province/${row.id}`}>
          <Button variant="warning" className="me-3">
            Edit
          </Button>
        </Link>
        <Button variant="danger" onClick={() => deleteHandler(row.id)}>
          Delete
        </Button>
      </>
    ),
  },
];

export default function Index() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Loading...",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      axios
        .get("http://34.101.172.140:3005/api/propinsi/list")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => err);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Main components */}
      <Container>
        <div>
          <h2 className="mt-5 mb-5">Province List</h2>
        </div>

        {/* Create product button */}
        <Link to="/add-province">
          <Button variant="primary">Add Province</Button>
        </Link>

        {/* Products list start */}
        <div className="d-flex justify-content-evenly flex-wrap mt-5 mb-5">
          <DataTable columns={columns} data={data} />
        </div>
        {/* Products list end */}
      </Container>
    </div>
  );
}
