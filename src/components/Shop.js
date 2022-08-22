import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./shop.css";
import { deleteItem, edit, fetchData } from "../redux/actions";
import { store } from "../redux/store";
//https://picsum.photos/500?random=1

const Shop = () => {
  const data = useSelector((state) => state.totalItems);
  const [activeLink, setActiveLink] = useState();
  const fetchButton = () => {
    store.dispatch(fetchData());
  };

  const handleDelete = (id) => {
    store.dispatch(deleteItem({ id: id }));
  };
  const handleEdit = (item) => {
    store.dispatch(edit(item));
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
    "fas fa-map-marker fa-2x",
    "fas fa-lock fa-2x",
  ];
  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };
  const Phrase = ({ user }) => {
    const phrases = [
      `Hi my name is ${user.fname} ${user.lname}.`,
      `My email is ${user.email}.`,
      `My phone number is ${user.phone}.`,
      `My DOB is ${user.dob}.`,
      `My address is ${user.city}, ${user.country}.`,
      `My username is ${user.username} & password is ${user.password}.`,
    ];
    return <h3>{phrases[activeLink]}</h3>;
  };
  return (
    <div>
      <h1>User's List</h1>
      <br />
      <button onClick={fetchButton} style={{ color: "rgb(255, 251, 244)" }}>
        <h3>Get User</h3>
      </button>
      <br />
      <hr />
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
                    style={activeLink === index ? { color: "#f67e7e" } : null}
                  ></i>
                ))}
              </div>
            </Fragment>
          </div>
        ))}
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
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
              <td>
                <button className="action_btn" onClick={() => handleEdit(item)}>
                  <Link
                    to={`/shop/edit/${item.id}`}
                    style={{ color: "white", width: "100%" }}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="action_btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
