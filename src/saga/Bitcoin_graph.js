import { call, put, takeEvery } from "redux-saga/effects";
import { Bitcoin_graph_success,Bitcoin_graph_fail} from '../Actions/Actions';
import axios from "axios";
import * as types from "../Action-type/Action-type";



const getdata = (input_id,input_time,input_currency) => {
  console.log("in the saga file",input_time,input_currency);
  return axios({
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${input_id}/market_chart?vs_currency=${input_currency}&days=${input_time}`,
  });
};

function* handleGetdata(action) {
  try {
    const product = yield call(getdata, action.payload,action.period,action.cur);
    yield put(Bitcoin_graph_success(product.data));

  } catch (error) {
    yield put(Bitcoin_graph_fail(error.product.data));
  }
}

function* graphdata() {
  yield takeEvery(types.GET_GRAPH_REQUESTED, handleGetdata);
}

export default graphdata;
