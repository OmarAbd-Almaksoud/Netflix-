import axiosInstance from "../components/axiosConfig/axiosInstance";

export default function changeLanguage(newLanguage) {
  return {
    type: "SET_LANGUAGE",
    payload: newLanguage,
  };
}

export function changeLoader(newValue) {
  return {
    type: "SET_LOADER",
    payload: newValue,
  };
}

export function getDataFromAPI() {
  return (dispatch) => {
    axiosInstance
      .get("")
      .then((res) => {
        dispatch({ type: "SET_MOVIES", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function isLoggedIn(newValue) {
  return {
    type: "SET_LOGGED",
    payload: newValue,
  };
}
