import React from "react";
// import Shop from "./Shop";
// import { FormContext } from "../../context/FormContext";
import { useSelector, useDispatch } from "react-redux";
import { inputChange, submit, clearForm } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";
import { Button } from "react-bootstrap";

const AddItem = () => {
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
  const onSubmit = (e) => {
    e.preventDefault();
    var date = Math.random(Date.now());
    store.dispatch(
      submit({
        id: date.toString(),
        dob: data.dob,
        username: data.username,
        password: data.password,
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        city: data.city,
        country: data.country,
        image: data.image,
      })
    );
    store.dispatch(clearForm());
    navigate("/shop");
  };

  return (
    <>
      <h1>Add User</h1>
      <div>
        <Button variant="light" className="btns" onClick={back}>
          Go Back &#11013;
        </Button>
      </div>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="">
          <div className="form-control">
            <label htmlFor="name">User's First Name:</label>
            <input
              type="text"
              placeholder="First Name..."
              name="fname"
              value={data.fname}
              // onBlur={inputNameBlurHandler}
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
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Photo Link:</label>
            <input
              type="text"
              placeholder="Photo Link..."
              name="image"
              value={data.image}
              // onBlur={inputImageBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Birth Date: </label>
            <input
              type="text"
              placeholder="Date of Birth..."
              name="dob"
              value={data.dob}
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Username: </label>
            <input
              type="text"
              placeholder="Username..."
              name="username"
              value={data.username}
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="form-control">
            <label htmlFor="name">User's Password: </label>
            <input
              type="text"
              placeholder="Password..."
              name="password"
              value={data.password}
              // onBlur={inputNameBlurHandler}
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
              // onBlur={inputNameBlurHandler}
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
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's City/State:</label>
            <input
              type="text"
              placeholder="Current City..."
              name="city"
              value={data.city}
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">User's Country: </label>
            <input
              type="text"
              placeholder="Current Country..."
              name="country"
              value={data.country}
              // onBlur={inputNameBlurHandler}
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
    </>
  );
};

export default AddItem;
