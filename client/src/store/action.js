import { Redirect } from "react-router";
import Toast from "../helpers/swalToast";

import axios from "axios";

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
  console.log('masuk set login')
  return { type: "SET_LOGIN", payload };
}

export function setDocuments(payload) {
  console.log('set doc')
  return { type: "SET_DOCUMENTS", payload };
}

export function uploadAction(payload) {
  console.log(payload);
  return function (dispatch) {
    const formData = new FormData();
    formData.append("File", payload);
    fetch(server + "/documents", {
      method: "POST",
      body: formData,
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
          console.log(result, "result");
          document.getElementById("myFile").value = "";
          dispatch(setDocuments([]))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getDocumentsAction() {
  return function (dispatch) {
    console.log('masuk')
    fetch(server + "/documents", {
      method: "GET",
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
          console.log(result);
          dispatch({ type: "SET_DOCUMENTS", payload: result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
