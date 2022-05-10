import { call, put, takeEvery,} from "redux-saga/effects";
import { datasuccess, datafail } from "../Actions/Actions";
import axios from "axios";

const getdata = () => {
  return axios({
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false",
  });
};

function* handleGetdata() {

    try {
      const datas = yield call(getdata);
      // console.log(datas,"....................................................................")

      yield put(datasuccess(datas.data));
 
    } catch (error) {
      yield put(datafail(error.datas.data));
    }

}
  
function* watchdata() {
  yield takeEvery("GET_DATA_REQUESTED", handleGetdata);
}

export default watchdata;
