import React from "react";
// import Shop from "./Shop";
// import { FormContext } from "../../context/FormContext";
import { useSelector, useDispatch } from "react-redux";
import { inputChange, update, clearForm } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import { store } from "../redux/store";
// import "./form.css";

const EditItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.totalItems);
  console.log(data);
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
        image: data.image,
      })
    );
    store.dispatch(clearForm());
    navigate("/shop");
  };

  return (
    <>
      <br />
      <div>
        <button onClick={back}>Go Back ⬅</button>
      </div>
      <br />
      <form onSubmit={onSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">Item Name:</label>
            <input
              type="text"
              placeholder="Item Name"
              name="fname"
              value={data.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Item Description:</label>
            <input
              type="text"
              placeholder="Description"
              name="lname"
              value={data.lname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Item Image Link:</label>
            <input
              type="text"
              placeholder="Image link"
              name="image"
              value={data.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <hr />
      <div>
        <button onClick={clear}>Clear Form</button>
      </div>
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
