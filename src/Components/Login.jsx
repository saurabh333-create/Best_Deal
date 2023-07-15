import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    let [data, setData]= useState({
        "username":"",
        "password":""
    })

    function getInputData(e){
          var {name,value}=e.target
          setData((oldData)=>{
            return {
                ...oldData,
                [name]: value
            }
          })
    }

    function postData(e){
        e.preventDefault()
        
    }
  return (
    <>
    {/* <!-- breadcrumb-section --> */}
    <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="breadcrumb-text">
                        <h5 className='text-light'>
                            <Link to="/" className='text-light'>Home</Link><i className='fa fa-arrow-right mx-3'></i>
                            Login
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end breadcrumb section --> */}
    <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-warning'>Login</span> to Your Account</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" onChange={getInputData} name="username" placeholder='Username : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" onChange={getInputData} name="password" placeholder='Password : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100'>Submit</button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-between'>
                        <Link className='' to="#">Forget Password?</Link>
                        <Link className='' to="/signup">New User ? Create a Free Acount</Link>
                    </div>
                </div>
            </div>
    </>
  )
}
