import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import  {getPeople} from "./Features/PeopleSclice"


function People() {
  console.log("in people");
    const [msg, setmsg] = useState("")
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.people)
 
    console.log(user.data+" before useefecct")
  
    useEffect(() => {
       dispatch(getPeople());
    }, [])
    
   


console.log("data from people "+user.data);
console.log("msg "+user.status);

    
  return (
    <>
    {user.status}
    <div>
      {user.data.map((n)=>{return <p>{n}</p>})}
    </div>
    
    </>

  );
}

export default People