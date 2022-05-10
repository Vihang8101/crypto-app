import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_BITCOIN_REQUESTED,
  GET_BITCOIN_SUCCESS,
  GET_BITCOIN_FAILED,
  GET_GRAPH_REQUESTED,
  GET_GRAPH_SUCCESS,
  GET_GRAPH_FAILED
} from "../Action-type/Action-type";

const initialstate = {
  items: [],
  Bitcoin_detail: [],
  Graph_data:[],
  loading: false,
  error: null,
  waiting: false,
  err: null,
  wait:false,
  errrr:null,

};

const BitReducer = (state = initialstate, action) => {
  if (action.type === GET_DATA_REQUESTED) {

    return {
      ...state,
      
      loading: true,
    };
    console.log(...state,"i am the state ");
  }

  if (action.type === GET_DATA_SUCCESS) {

    return {
      ...state,
      loading: false,
      items: action.payload,
    };
  }

  if (action.type === GET_DATA_FAILED) {
    return {
      ...state,
      loading: false,
      error: action.message,
    }
  }

    if (action.type === GET_BITCOIN_REQUESTED) {
      return {
        ...state,
        waiting: true,
      };
    }
  
    if (action.type === GET_BITCOIN_SUCCESS) {
      // console.log("in the reducer file product data----",action.payload);
      return {
        ...state,
        Bitcoin_detail: [action.payload],
        waiting: false,
      };
    }
    if (action.type === GET_BITCOIN_FAILED) {
      return {
        ...state,
        waiting: false,
        error: action.message,
      };
    }
      if (action.type === GET_GRAPH_REQUESTED) {
        return {
          ...state,
          wait: true,
        };
      }
    
      if (action.type === GET_GRAPH_SUCCESS) {
    
        return {
          ...state,
          Graph_data: action.payload,
          wait: false,
        };
      }
      if (action.type === GET_GRAPH_FAILED) {
        return {
          ...state,
          wait: false,
          errrr: action.message,
        };
      }
    else {
    return state;
  }
};

export default BitReducer;
