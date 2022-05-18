import React from "react";
import { useState, useEffect } from "react";
import jsondata from "../example_data.json";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";
import CardDetail from "../component/CardDetail";
const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    setData(jsondata);
  }, []);

  return (
    <div className="containers">
      <div className="header-container">
        <Container>
          <Row className="d-flex">
            <Col md={6} sm={12}>
              <div className="place-list-text">
                <h3>Place List</h3>
              </div>
            </Col>
            <Col md={2} sm={12}>
              <div className="place-list-select">
                <select
                  className="select-form"
                  value={select}
                  onChange={handleSelect}
                >
                  <option></option>
                  <option>restaurant</option>
                  <option>bakery</option>
                  <option>cafe</option>
                </select>
              </div>
            </Col>

            <Col md={4} sm={12} className="d-flex col-item">
              <div className="place-list-item">
                <h7 className="place-list-span d-none d-sm-flex"> | </h7>
                <div className="place-list-input">
                  <input
                    type="text"
                    placeholder="    ...search name"
                    value={search}
                    onChange={handleChange}
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="card-content">
        {data
          .filter((item) => {
            if (select !== "") {
              return item.categories.includes(select);
            } else {
              return item;
            }
          })
          .filter((item) => {
            return item.name.includes(search);
          })
          .map((item) => {
            return <CardDetail key={item._id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
