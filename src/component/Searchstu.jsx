import React from 'react'
import Nav from './Nav'

const Searchstu = () => {
  return (
    <div 
    style={{
        backgroundImage: 'url("https://img.freepik.com/premium-vector/hand-drawn-flat-university-background-with-students_98292-25651.jpg")',
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
        <label htmlFor="" className="form-label"><b>roll no</b></label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-success">search</button>
    </div>
</div>

        </div>
    </div>
</div>



    </div>
  )
}

export default Searchstu