import React from "react";
// import Shop from "./Shop";
// import { FormContext } from "../../context/FormContext";
import { useSelector, useDispatch } from "react-redux";
import { inputChange, submit, clearForm } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";

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
        name: data.name,
        desc: data.desc,
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
              name="name"
              value={data.name}
              // onBlur={inputNameBlurHandler}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Item Description:</label>
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={data.desc}
              // onBlur={inputDescBlurHandler}
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
              // onBlur={inputImageBlurHandler}
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
    </>
  );
};

export default AddItem;
