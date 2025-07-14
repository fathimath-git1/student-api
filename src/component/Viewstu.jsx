import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewstu = () => {
  const [stuData, changestuData] = useState(

{"status":"success","data":[]}



  )
    const fetchData=()=>{
   axios.get("http://18.144.111.41/view_all_students.php").then(
    (response)=>{
    changestuData(response.data)
    }
   ).catch()

    }
   useEffect(()=>{fetchData()},[])



  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">name</th>
                      <th scope="col">roll no</th>
                      <th scope="col">admission no</th>
                      <th scope="col">college</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stuData.data.map(
                      (val, index) => {
                        return (

                          <tr>
                            <th scope="row">{val.name}</th>
                            <td>{val.roll_number}</td>
                            <td>{val.admission_number}</td>
                            <td>{val.college}</td>
                          </tr>

                        )
                      }
                    )
                    }

                  </tbody>
                </table>



              </div>
            </div>





          </div>
        </div>
      </div>





    </div>
  )
}

export default Viewstu