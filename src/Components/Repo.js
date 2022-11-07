import React from "react";
import { useSelector } from "react-redux";
import ViewRep from "./ViewRep";
import "../styles/card.css";

function Repo() {
  console.log("in repo");
  const loading = useSelector((state) => state.people.loading);
  const userDetails = useSelector((state) => state.people.data);
  console.log("in userDetails", userDetails);
  return (
    <>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        
        <div className="cards">
      

          {userDetails.map((rep, i) => (
            <ViewRep
              key={i}
              name={rep.name}
              image={rep.owner.avatar_url}
              desc={rep.description}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Repo;
