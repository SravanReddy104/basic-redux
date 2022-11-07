import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "../styles/card.css";

function ViewRep({ name, image, desc }) {
  const naviagte = useNavigate();
  console.log("image",image)

  return (
    <div className="card">
     
        <div className="image">
          <img src={`${image}`} alt="img" />
        </div>
        <div className="details">
          <h6  onClick={() =>
              naviagte({
                pathname: `/${name}`,
                search: createSearchParams({
                    name: name,
                  description: desc,
                
                  avatar: image,
                }).toString(),
              })
            }>{name}</h6>
          <p>
            {desc}
          </p>
        </div>
      </div>
    
  );
}

export default ViewRep;
