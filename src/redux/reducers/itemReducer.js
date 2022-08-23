export const initialState = {
  id: "",
  dob: "",
  username: "",
  password: "",
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  image: "",
  items: [],
  isEdit: false,
  isLoading: false,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        ...state.input,
        ...action.payload,
      };
    case "SUBMIT":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    // case "SUBMIT":
    // return {
    //   ...state,
    //   items: [...state.items, action.payload[0]],
    // };
    case "FETCH":
      return {
        ...state,
        items: [...action.payload, ...state.items],
        // items: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "EDIT":
      return {
        ...state,
        isEdit: true,
        id: action.payload.id,
        fname: action.payload.fname,
        lname: action.payload.lname,
        image: action.payload.image,
      };
    case "UPDATE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                fname: state.fname,
                lname: state.lname,
                image: state.image,
              }
            : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_FORM":
      return {
        ...state,
        name: "",
        desc: "",
        image: "",
        isEdit: false,
      };
    default:
      return state;
  }
};
