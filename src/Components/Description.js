import React from 'react'
import { useSearchParams } from 'react-router-dom';

import "../styles/card_profile.css";

function Description() {

    const [data] = useSearchParams();
    const image_url=data.get("avatar")
    const name=data.get("name")
    const desc=data.get("description")
  return (
    <div className="card_profile">
        <div className="image_profile">
              <img className='imgs' src={`${image_url}`} alt="img" />
          </div>
          <div>    
              <p>Verified By GitHub</p>
              <p>GitHub confirms thata this app meets the requirements for verfication</p>
        </div>
        <div className="catgory">
            <p>Categories</p>
            <div className="list">
                <div className="b1">
                    IDEs
                </div>
                <div className="b1">
                    free
                </div>
                <div className="b1">
                   paid
                </div>
            </div>
            <div className="application">
                <p>Application</p>
                <h4>{name}</h4>
                <div>
                <button className='buttons'>Set up a plan</button>
                </div>
                
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Description