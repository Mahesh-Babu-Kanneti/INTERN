import "./styles.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

//Bootstrap for UI designed package Input Form
import Form from "react-bootstrap/Form";

export default function Listview() {
  const [dataset, setDataset] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setDataset(res.data.data));
  }, []);
  console.log(search);
  return (
    <>
      <center>
        <h1>GREENDZINE TECHNOLOGIES PVT LTD</h1>
        <div className="listview">
          <Form autoComplete="off">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Search Employee"
                className="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Form>
          {dataset
            .filter(
              (emp) =>
                emp.first_name.toLowerCase().includes(search) ||
                emp.first_name.toUpperCase().includes(search)
            )
            .map((list) => (
              <div className="list" key={list.id}>
                <img src={list.avatar} alt="avatar" />
                <span className="dot">{list.id}</span>
                <p>{list.first_name}</p>
              </div>
            ))}
        </div>
      </center>
    </>
  );
}
