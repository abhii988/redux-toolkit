export const fetchData = () => async (dispatch) => {
  const response = await fetch("https://randomuser.me/api/");
  const responseData = await response.json();
  const newData = responseData?.results.map((itm) => ({
    id: itm.login.uuid,
    dob: itm.dob.date.slice(0, 10),
    username: itm.login.username,
    password: itm.login.password,
    fname: itm.name.first,
    lname: itm.name.last,
    email: itm.email,
    phone: itm.phone,
    city: itm.location.city,
    country: itm.location.country,
    image: itm.picture.large,
  }));
  console.log("newData", newData);
  dispatch({
    type: "FETCH",
    payload: newData,
  });
};
export const inputChange = (data) => {
  return {
    type: "INPUT_CHANGE",
    payload: data,
  };
};
export const submit = (data) => {
  return {
    type: "SUBMIT",
    payload: data,
  };
};
export const edit = (data) => {
  return {
    type: "EDIT",
    payload: data,
  };
};
export const update = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
export const deleteItem = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
export const clearForm = () => {
  return {
    type: "CLEAR_FORM",
  };
};
