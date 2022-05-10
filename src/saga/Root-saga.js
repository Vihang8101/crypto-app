import { all } from "@redux-saga/core/effects";
import Bitsaga from "../saga/Bitsaga";
import Bitcoin_Product from "../saga/Bitcoin_Product";
import Bitcoin_graph  from "../saga/Bitcoin_graph";

export default function* rootsaga() {
  yield all([
    Bitsaga(),
    Bitcoin_Product(),
    Bitcoin_graph(),
  ]);
}
