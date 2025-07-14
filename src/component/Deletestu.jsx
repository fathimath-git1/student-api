import React from 'react'
import Nav from './Nav'

const Deletestu = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/015/915/999/non_2x/top-view-of-desktop-background-phone-documents-coffee-folder-planner-glasses-paper-stationery-workplace-for-business-study-illustration-vector.jpg")',
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
        <label htmlFor="" className="form-label"> <b>roll no</b></label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-danger">delete</button>
    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Deletestu