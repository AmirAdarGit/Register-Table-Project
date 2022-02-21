import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/User.css";

function User() {
  const navigate = useNavigate();


  function handleClick() {
    navigate('/');
  }

  return (
    <div className="user">
      <h1>Hello {"user"}</h1>
      <br />
      <button onClick={handleClick}>back home</button>

    </div>
  );
};

export default User;
