import React, { useState } from 'react'
import Nav from './Nav'

const Signup = () => {
  const [input, changeInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const inputhandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    console.log(input)
  }

  return (
    <div>
      <Nav />
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="row">
          <div className="col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
            <div className="row g-3">

              <div className="row ">
                <div className="col-6 mx-auto">
                  <label className="form-label"><b>Username</b></label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={input.username}
                    onChange={inputhandler}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 mx-auto">
                  <label className="form-label"><b>Email</b></label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={inputhandler}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 mx-auto">
                  <label className="form-label"><b>Password</b></label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={input.password}
                    onChange={inputhandler}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 mx-auto">
                  <label className="form-label"><b>Confirm Password</b></label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmpassword"
                    value={input.confirmpassword}
                    onChange={inputhandler}
                  />
                </div>
              </div>

              <div className="row g-2">
                <div className="col-6 mx-auto">
                  <button className="btn btn-success w-100" onClick={readValue}>
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="row g-2">
                <div className="col-12 text-center">
                  <p>
                    Already have an account? <a href="/login">Login</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
