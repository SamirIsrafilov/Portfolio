import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <section className='py-5 my-5 sign_up '>
                <div className='text-center my-5'>
                    <h2 className='mb-4 fw-bold'>Create an Account</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <form>
                    <div className="container ">
                        <div className="row row-cols-2">
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">First Name</label>
                                <input type="email" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">Last Name</label>
                                <input type="email" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">Password</label>
                                <input type="email" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <label className="form-label">Confirm Password</label>
                                <input type="email" className="form-control bg-transparent text-white rounded-0" style={{ height: "50px" }} />
                            </div>
                            <div className="col-12 my-2">
                                <label className="form-label">Select Plan</label>
                                <select className="form-select bg-transparent rounded-0 text-muted" defaultValue={'DEFAULT'} placeholder='STANDARD - Free' style={{ height: "50px", fontSize: "12px" }}>
                                    <option value="DEFAULT" >STANDARD - Free</option>
                                    <option value="1">Platinum - $79/mo</option>
                                    <option value="2">Platinum - $120/mo</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-check mt-2" id='check_box'>
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            I accept the <Link to="/terms" className='security_regular'>Terms of Use</Link> & <Link to="/policy" className='security_regular'>Privacy Policy</Link>.
                            </label>
                        </div>
                        <button type="submit" className="btn rounded-0 fs-6 mb-3 mt-3 btn_group"><span>Sign Up</span></button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default SignUp