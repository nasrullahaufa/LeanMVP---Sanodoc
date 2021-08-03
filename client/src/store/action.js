import { Redirect } from "react-router";
import Toast from "../helpers/swalToast";

const server = "http://localhost:3001";
export function loginAction(payload) {
  console.log(payload);
  return function (dispatch) {
    fetch(server + "/user/login", {
      method: "POST",

      body: JSON.stringify(payload),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.error) {
          Toast.fire({
            icon: "warning",
            title: result.error,
          });
        } else {
          localStorage.setItem("access_token", JSON.stringify(result));
          dispatch(setLogin(true));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function setLogin(payload) {
  return { type: "SET_LOGIN", payload };
}
