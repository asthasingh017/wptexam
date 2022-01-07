//import axios from 'axios';
import { useState } from 'react';

export default function App(){

  return (
<div className="container-fluid">
  {" "}
 < mycomponent/>
</div>
    
  );
}

function Mycomponent(){
  const headerApp="My Chat App";
  const studentName="Aastha Singh";
  const studentId="210940520017";
  const[inputchat,setinputchat]=useState("");
  const handleinput=(e) =>{
    const newValue=e.target.newValue;
    setinputchat(newValue);
  }
  const sendMessage=()=>{

  };

  return(
    <div>
      <div className='row bg-secondary p-2'>
        <div className='col fs-1'>{headerApp}</div>
        <div className='col fs-4'>
          {studentName}{studentId}
          </div>
          </div>
          <div className='row mt-2'>
            <div className='col-10 p-1'>
              <input type="text"
              name=""
              id=""
              placeholder='Lets chat here...'
              className='form-control w-100'
               />


          </div>

<div className='col-2 p1'>
  <input type="button" 
  value="send"
  className='form-control p-3 btn btn-outline-primary border round' 
  onClick={sendMessage}
  />
</div>
</div>
</div>

  );
}
