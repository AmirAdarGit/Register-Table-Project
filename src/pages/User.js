import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "../css/User.css";
import { userAuth } from "../recoil-state/recoil.state";
import { gapi } from "gapi-script";
import axios from "axios";

function User() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAuth);

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    if (user === null || user === undefined || user.length === 0) {
      navigate("/");
    }
  }, []);

  const createNewSheets = async (tag) => {
    const accessToken = gapi.auth.getToken().access_token;
    console.log(accessToken);
    const sheetsTitle = tag + "Sheet: " + getDateString() + getTimeString();

    console.log(gapi.client);
    var spreadsheetBody = {
      title: "amirs first seets",
    };

    var request = await gapi.client.sheets.spreadsheets
      .create({}, spreadsheetBody)
      .then(
        function (response) {
          // TODO: Change code below to process the `response` object:
          console.log(response.result);
        },
        function (reason) {
          console.error("error: " + reason.result.error.message);
        }
      );
    // const res = await axios.post(
    //   `https://sheets.googleapis.com/v4/spreadsheets`,
    //   {
    //     headers: {
    //       Authorization: "Bearer " + accessToken,
    //     },
    //   }
    // );

    // const response = await fetch(
    //   `https://sheets.googleapis.com/v4/spreadsheets`,
    //   {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     headers: new Headers({ Authorization: "Bearer " + accessToken }),
    //   }
    // );

    // const jso = await JSON.stringify(response);
    // console.log(jso);
  };
  function makeApiCall() {
    var spreadsheetBody = {
      title: "amirs first seets",
    };

    var request = gapi.client.sheets.spreadsheets
      .create({}, spreadsheetBody)
      .then(
        function (response) {
          // TODO: Change code below to process the `response` object:
          console.log(response.result);
        },
        function (reason) {
          console.error("error: " + reason.result.error.message);
        }
      );
  }
  const zeroFill = (i) => {
    return (i < 10 ? "0" : 0) + i; // 10
  };
  const getDateString = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1);
    const day = zeroFill(date.getDate());
    return year + "-" + month + "-" + day;
  };
  const getTimeString = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <>
      {user.length === 0 ? (
        ""
      ) : (
        <div className="user">
          <div>hello {user[0].givenName}</div>
          <button onClick={handleClick}>back home</button>

          <button onClick={createNewSheets}>Create New Sheets</button>
        </div>
      )}
    </>
  );
}

export default User;
