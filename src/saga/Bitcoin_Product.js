import { call, put, takeEvery,delay } from "redux-saga/effects";
import { Bitcoin_success,Bitcoin_fail} from '../Actions/Actions';
import axios from "axios";
import * as types from "../Action-type/Action-type";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/";

const getdata = (input_id) => {
  console.log("helo.....................",input_id);
  return axios({
    method: "GET",
    url: `${BASE_URL}/${input_id}`,
  });
};

function* handleGetdata(action) {
  // while (true) {
  try {
    const product = yield call(getdata, action.payload);
    // yield delay(10000);

    yield put(Bitcoin_success(product.data));

  } catch (error) {
    yield put(Bitcoin_fail(error.product.data));
  }
// }
}

function* watchdata() {
  yield takeEvery(types.GET_BITCOIN_REQUESTED, handleGetdata);
}

export default watchdata;
