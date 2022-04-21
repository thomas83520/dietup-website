import { projectCloudFunctions } from "../firebase/config";
import { useReducer, useState, useEffect } from "react";

let initalState = {
  isPending: false,
  error: null,
  success: null,
  data: null,
};

const functionsReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        isPending: true,
        success: null,
        error: null,
        data: null,
      };
    case "SUCCESS":
      return {
        isPending: false,
        success: true,
        error: null,
        data: action.payload,
      };
    case "ERROR":
      return {
        isPending: false,
        success: null,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

export const useFunctions = () => {
  const [response, dispatch] = useReducer(functionsReducer, initalState);
  const [isCancelled, setIsCancelled] = useState(false);

  //only if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const callfunction = async (functionName, functionData) => {
    dispatch({ type: "IS_PENDING" });
    try {
      console.log("name", functionName);
      var functions = projectCloudFunctions.httpsCallable(functionName);
      console.log(functionData);
      const response = await functions(functionData);
      dispatchIfNotCancelled({ type: "SUCCESS", payload: response.data });
      console.log("response",response);
      return response.data;
    } catch (e) {
      console.log("error", e);
      dispatchIfNotCancelled({ type: "ERROR", payload: e });
    }
  };
  //clean up functions
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { callfunction, response };
};
