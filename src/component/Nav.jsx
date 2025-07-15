import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Student App</a>
        </li>
        < li className="nav-item">
          <Link className="nav-link" to="/Login">login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Add</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Searchstu">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Deletestu">Delete</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Viewstu">View</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav