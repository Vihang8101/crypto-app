import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_BITCOIN_REQUESTED,
  GET_BITCOIN_SUCCESS,
  GET_BITCOIN_FAILED,
  GET_GRAPH_REQUESTED,
  GET_GRAPH_SUCCESS,
  GET_GRAPH_FAILED,
} from "../Action-type/Action-type";


export const  Getdata = () => {


    return {
      type: GET_DATA_REQUESTED,
    };
  };
  
  export const datasuccess = (data) => {
console.log("this data--->",data);

    return {
      type: GET_DATA_SUCCESS,
      payload: data,
    };
  };

  export const datafail = (error) => {
    console.log("this is error",error)
    return {
      type: GET_DATA_FAILED,
      payload: error,
    };
  };

  export const Bitcoin = (id) => {
    console.log("this is id ---->",id);
    return {
      type: GET_BITCOIN_REQUESTED,
      payload: id,
    };
  };

  export const Bitcoin_success = (data) => {
   return {
      type: GET_BITCOIN_SUCCESS,
      payload: data,
    };
  };
  
  
  export const Bitcoin_fail = (error) => {
    return {
      type: GET_BITCOIN_FAILED,
      payload: error,
    };
  };

  export const Bitcoin_graph = (id,Time,currency) => {
console.log("in the action file-->",currency , "time--->",Time);
    return {
      type: GET_GRAPH_REQUESTED,
      payload: id,
      period:Time,
      cur:currency,
    };
  };

  export const Bitcoin_graph_success = (data) => {
   return {
      type: GET_GRAPH_SUCCESS,
      payload: data,
    };
  };
  
  
  export const Bitcoin_graph_fail = (error) => {
    return {
      type: GET_GRAPH_FAILED,
      payload: error,
    };
  };

