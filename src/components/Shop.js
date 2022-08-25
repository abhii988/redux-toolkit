import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./shop.css";
import { deleteItem, edit, fetchData, dataLoader } from "../redux/actions";
import { store } from "../redux/store";
import { Table, Button } from "react-bootstrap";
//https://picsum.photos/500?random=1

const Shop = ({ error, setError }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.totalItems);
  const add = () => {
    navigate("/shop/add");
  };
  const [activeLink, setActiveLink] = useState();
  const fetchButton = () => {
    store.dispatch(fetchData()).catch((err) => {
      setError(err.message);
      // console.log("fetch error msg", err.message);
    });
    store.dispatch(dataLoader(true));
  };
  const handleDelete = (id) => {
    store.dispatch(deleteItem({ id: id }));
  };
  const handleEdit = (item) => {
    store.dispatch(edit(item));
    navigate(`/shop/edit/${item.id}`);
  };
  // console.log(data.items[0]);
  // let value = data.items[0];
  let value = [{ id: "" }];
  value = [data.items[0]];
  // console.log("value", value);

  const icons = [
    "fas fa-user fa-2x",
    "fas fa-envelope fa-2x",
    "fas fa-phone fa-2x",
    "fas fa-calendar-alt fa-2x",
    "fas fa-solid fa-location-dot fa-2x",
    "fas fa-lock fa-2x",
  ];
  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };
  const Phrase = ({ user }) => {
    const phrases = [
      `Hi! My name is ${user.fname} ${user.lname}.`,
      `My email is ${user.email}.`,
      `My phone number is ${user.phone}.`,
      `My DOB is ${user.dob}.`,
      `My address is ${user.city}, ${user.country}.`,
      `My username is "${user.username}" & password is "${user.password}".`,
    ];
    return <h3>{phrases[activeLink]}</h3>;
  };
  return (
    <div className="asd">
      <h1>User's List:</h1>
      <br />
      <Button
        variant="light"
        disabled={data.isLoading}
        onClick={!data.isLoading ? fetchButton : null}
        className="btns"
      >
        {data.isLoading ? "Loading…" : "Fetch User"} &#9850;
      </Button>{" "}
      <Button variant="light" onClick={add} className="btns">
        Add User &#10011;
      </Button>
      <hr />
      {error === null ? (
        <div>
          {data.items.length > 0 ? (
            <div>
              {data.isLoading ? (
                <div className="loader" />
              ) : (
                <div className="app_user">
                  {value.map((val) => (
                    <div key={val.id}>
                      <Fragment>
                        <img src={val.image} alt={val.fname} />
                        <Phrase user={val} />
                        <div className="app_icons">
                          {icons.map((icon, index) => (
                            <i
                              className={icon}
                              key={index}
                              onMouseEnter={() => activeLinkHandler(index)}
                              style={
                                activeLink === index
                                  ? { color: "#f67e7e" }
                                  : null
                              }
                            ></i>
                          ))}
                        </div>
                      </Fragment>
                    </div>
                  ))}
                </div>
              )}
              <br />
              <hr />
              <Table striped hover variant="success">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>E-Mail Address</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((item) => (
                    <tr key={item.id}>
                      <td>{data.items.indexOf(item) + 1}</td>
                      <td>
                        <Link
                          to={`/shop/${item.id}`}
                          style={{ textDecoration: "underline" }}
                        >
                          {item.fname} {item.lname}
                        </Link>
                      </td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <Button
                          variant="info"
                          className="action_btn"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="info"
                          className="action_btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <h1 style={{ textAlign: "centre", display: "block" }}>no data</h1>
          )}
        </div>
      ) : (
        <h1 style={{ textAlign: "centre", display: "block" }}>{error}</h1>
      )}
    </div>
  );
};

export default Shop;
