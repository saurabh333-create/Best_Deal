import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
                                    Contact
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- contact form --> */}
            <div className="contact-from-section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you any question?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            </div>
                            <div id="form_status"></div>
                            <div className="contact-form">
                                <form type="POST" id="fruitkha-contact" onSubmit="return valid_datas( this );">
                                    <p>
                                        <input type="text" placeholder="Name" name="name" id="name" />
                                        <input type="email" placeholder="Email" name="email" id="email" />
                                    </p>
                                    <p>
                                        <input type="tel" placeholder="Phone" name="phone" id="phone" />
                                        <input type="text" placeholder="Subject" name="subject" id="subject" />
                                    </p>
                                    <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea></p>
                                    <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                    <p><input type="submit" value="Submit" /></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-map"></i> Shop Address</h4>
                                    <p>A-43 <br /> Sector 16, Noida <br /> UP, India</p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="far fa-clock"></i> Shop Hours</h4>
                                    <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-address-book"></i> Contact</h4>
                                    <p><i className='fa fa-phone'></i> :  <a href="tel:9873848046">9873848046</a> <br /> <i className='fa fa-envelope'></i> : <a href="mailto:vishankchauhan@gmail.com">vishankchauhan@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end contact form --> */}

            {/* <!-- find our location --> */}
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end find our location --> */}

            {/* <!-- google map section --> */}
            <div className="embed-responsive embed-responsive-21by9">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20noida%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
            </div>
            {/* <!-- end google map section --></div> */}
        </>
    )
}
