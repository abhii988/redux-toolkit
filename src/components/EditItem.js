import React from "react";
// import Shop from "./Shop";
// import { FormContext } from "../../context/FormContext";
import { useSelector, useDispatch } from "react-redux";
import { inputChange, update, clearForm } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import { store } from "../redux/store";
import { Button } from "react-bootstrap";
// import "./form.css";

const EditItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.totalItems);
  const handleChange = (e) => {
    dispatch(inputChange({ [e.target.name]: e.target.value }));
  };
  const clear = () => {
    store.dispatch(clearForm());
  };
  const back = () => {
    store.dispatch(clearForm());
    navigate("/shop");
  };
  const params = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    store.dispatch(
      update({
        id: params.id,
        fname: data.fname,
        lname: data.lname,
        phone: data.phone,
        email: data.email,
        image: data.image,
      })
    );
    store.dispatch(clearForm());
    navigate("/shop");
  };

  return (
    <>
      <h1>Edit User</h1>
      <div>
        <Button variant="light" className="btns" onClick={back}>
          Go Back &#11013;
        </Button>
      </div>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">User's First Name:</label>
            <input
              type="text"
              placeholder="First Name..."
              name="fname"
              value={data.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Last Name:</label>
            <input
              type="text"
              placeholder="Last Name..."
              name="lname"
              value={data.lname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Phone No.:</label>
            <input
              type="text"
              placeholder="Phone Number..."
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's E-mail Ad.:</label>
            <input
              type="text"
              placeholder="E-mail Address..."
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Photo Link:</label>
            <input
              type="text"
              placeholder="Image Link..."
              name="image"
              value={data.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              className="btns"
              variant="outline-light"
              type="submit"
              style={{ fontSize: "18px" }}
            >
              Submit
            </Button>{" "}
            <Button
              className="btns"
              variant="outline-light"
              type="reset"
              value="Reset"
              onClick={clear}
              style={{ fontSize: "18px" }}
            >
              Clear Form
            </Button>
          </div>
        </div>
      </form>
      <hr />
      {/* <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <button type="text" className="submit">
          submit
        </button>
      </div> */}
    </>
  );
};

export default EditItem;
