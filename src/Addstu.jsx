import React, { useState } from 'react'
import Nav from './component/Nav'
import axios from 'axios'

const Addstu = () => {
  const [input,changeInput]=useState(
    
{name: "",
roll_number: "",
admission_number:"",
college: ""
}
  )
   const inputhandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
          (response)=>{
            alert("successfull")
          }
        ).catch()
    }
  return (
    <div   style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/flat-background-world-teacher-s-day-celebration_23-2150722546.jpg?semt=ais_hybrid&w=740")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
   <Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label"><b>name</b></label>
                 <input type="text" className="form-control" name='name' value={input.name} onChange={inputhandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label htmlFor="" className="form-label"><b>roll no</b></label>
                  <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputhandler} />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label htmlFor="" className="form-label"><b>admission no</b></label>
                <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputhandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label htmlFor="" className="form-label"><b>college</b></label>
                 <input type="text" className="form-control" name='college' value={input.college} onChange={inputhandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
            </div>

        </div>
    </div>
</div>



    </div>
  )
}

export default Addstu