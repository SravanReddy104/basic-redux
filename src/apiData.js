import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getPeople } from "./Features/apiDataSlice";
import "./styles/card.css";

function People() {
  const [username, setusername] = useState("");
  const [error, seterror] = useState("")

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlEnter = (e)=>{
    if(username && e.key === "Enter"){
      dispatch(getPeople(username));
      navigate("/repo");
     }

  }
  const add = document.querySelector("input")
  if(add){
    add.addEventListener("keyup",handlEnter)
  }

  function handle(e){
    console.log("in handle");
    console.log(username)
  //  const button = document.querySelector("submit").classList;
  //  console.log(button);
   console.log("key ",e.key);
 
   if(username ){
    dispatch(getPeople(username));
    navigate("/repo");
   }
   else{
       seterror("Please Enter Username")
   }
  }


  return (
    <>
      {username}
      <div className="form">
        <input
          type="text"
          className="username"
          placeholder="Enter Username"
          onChange={(e) => setusername(e.target.value)}
        />
        <button
          className="submit"
          onClick={handle}
        >
          Submit
        </button>
        <div className="error">
          {error}
        </div>
      </div>
    </>
  );
}

export default People;
