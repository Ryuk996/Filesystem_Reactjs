import React, { useState } from "react"
import axios from "axios";
import env from "./settings"
import { useHistory } from "react-router-dom";

export default function CreateStudent(){

    const [fileName,setFileName]=useState(" ");
 

    const [task,setTask]=useState(" ");

    const[isLoading,setLoading]=useState(false)
    const history = useHistory();
    
    let handlleSubmit =async(e) => {
      e.preventDefault();
      
      try {
        setLoading(true)
        let postStud= await axios.post(`${env.api}/create-file`,{fileName});
        console.log(postStud)
        alert(postStud.data)
        setFileName("")
        setLoading(false)
        history.push("/")
      }
      catch{
        console.error();
        setLoading(false)
      }
    }

    return(
        <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create file</h1>
        
      </div>
      <div className="container">
        <form onSubmit={handlleSubmit}>
          <div className='row'>
            <div  className="col-lg-6">
                <label><h6>File name</h6></label>
                <p>Enter your file name along with extension</p>
                <input type="text" value={fileName} onChange={(e) => {setFileName(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-12">
                <input type="submit" value="Create" className="btn btn-primary mt-3" disabled={isLoading}></input>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}