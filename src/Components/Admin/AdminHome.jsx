import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Admin Section</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <h5 className='bg-primary p-3 text-light text-center rounded'>Admin Home</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/img/user.jpg" height="360px" width="100%" alt="" />
                        </div>
                        <div className="col-md-6">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Nitin Chauhan</th>
                                    </tr>
                                    <tr>
                                        <th>User Name</th>
                                        <th>admin</th>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <th>vishankchauhan@gmail.com</th>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <th>9873848046</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100 btn-sm'>Update</Link></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
