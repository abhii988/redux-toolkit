import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/item";
// import { GET_USER } from "../actions";
import { getUser } from "../itemSlice";

export function* watcherSaga() {
  // yield takeLatest("totalItems/getUser", handleGetUser);
  yield takeLatest(getUser.type, handleGetUser);
}
