import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserImg from '../img/user.jpg';
import 'animate.css';


const AccountSettings = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [profile, setProfile] = useState('d-flex');
    const [account, setAccount] = useState('d-none');
    const [backcolor1, setBackColor1] = useState('red');
    const [backcolor2, setBackColor2] = useState('#202020');
    return (
        <div className='py-5 my-5' >
            <div className='container'>
                <div className='px-0 px-lg-5 mx-0 mx-lg-4' id='settings_btn'>
                    <button onClick={() => {
                        setProfile('d-flex');
                        setAccount('d-none');
                        setBackColor1("red");
                        setBackColor2("#202020");

                        
                    }}
                        className='btn text-white border-0 rounded-0 ms-2 px-3 py-2'
                        style={{ fontSize: "14px", backgroundColor: backcolor1}}>
                        Profile Settings</button>
                    <button onClick={() => {
                        setProfile('d-none');
                        setAccount('d-flex');
                        setBackColor1("#202020");
                        setBackColor2("red");
                    }}
                        className='btn text-white border-0 rounded-0 px-3 py-2'
                        style={{ fontSize: "14px", backgroundColor: backcolor2}}>
                        Account Settings</button>
                </div>
            </div>
            <section className={profile} >
                <form className='container mt-3 profile_form animate__animated animate__fadeInRight animate__fast' onSubmit={e => { e.preventDefault(); }}>
                    <div className=' px-0 px-lg-5 mx-0 mx-lg-4'>
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-12 col-md-2 pb-3" id="user_img">
                                    <img className='img-fluid' src={UserImg} alt="" />
                                    <button>Edit</button>
                                </div>
                                <div className="col-12 col-md-10">
                                    <h2 className='fw-bold'>John Doe</h2>
                                    <p style={{ fontSize: "14px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>General Information</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required placeholder='John Doe' style={{ height: "50px" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required defaultValue='contact@example.com' style={{ height: "50px" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required defaultValue='Jhon' style={{ height: "50px" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required defaultValue='Doe' style={{ height: "50px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>Change Password</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Current Password</label>
                                        <input type="password" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required placeholder='Enter your current password' style={{ height: "50px" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="password" className="form-control rounded-0 bg-transparent form-lg-control  text-muted" required defaultValue="password" style={{ height: "50px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>Personal Information</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Date of Birth</label>
                                        {/* <input type="date" className="form-control rounded-0 bg-transparent form-lg-control text-muted" required defaultValue='01/20/2021' style={{ height: "50px" }} /> */}
                                        <DatePicker className='bg-transparent text-muted border ' id='data_picker' selected={startDate} required onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <select className="form-select bg-transparent rounded-0 text-muted" defaultValue={'DEFAULT'} required style={{ height: "50px", fontSize: "12px" }}>
                                            <option value="DEFAULT" >Male</option>
                                            <option value="1">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Language</label>
                                        <select className="form-select bg-transparent rounded-0 text-muted" defaultValue={'DEFAULT'} required style={{ height: "50px", fontSize: "12px" }}>
                                            <option value="1">Arabic</option>
                                            <option value="DEFAULT" >English</option>
                                            <option value="2">German</option>
                                            <option value="3">Spanish</option>
                                            <option value="4">French</option>
                                            <option value="5">Italian</option>
                                            <option value="6">Russian</option>
                                            <option value="7">Japanese</option>
                                            <option value="8">Chinese</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <button className='btn rounded-0 mt-2 btn_group me-3' type='submit'><span>Save</span></button>
                                <button className='btn rounded-0 mt-2 btn_group' type='submit'><span>Cancel</span></button>
                            </div>
                        </div>
                    </div>




                </form>
            </section>



            <section className={account}>
                <form className='container mt-3 profile_form  animate__animated animate__fadeInRight  animate__fast ' onSubmit={e => { e.preventDefault(); }}>

                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>Change Plan</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Change Plan</label>
                                        <select className="form-select bg-transparent rounded-0 text-muted" defaultValue={'DEFAULT'} placeholder='STANDARD - Free' style={{ height: "50px", fontSize: "12px" }}>
                                            <option value="DEFAULT" >STANDARD - Free</option>
                                            <option value="1">Platinum - $79/mo</option>
                                            <option value="2">Platinum - $120/mo</option>
                                        </select>
                                        <button className='btn rounded-0 mt-2 btn_group me-3 mt-3' type='submit'><span>Cancel Membership</span></button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>Payment Method</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Payment Method</label>
                                        <p className='text-muted' style={{ fontSize: "12px" }} >You have not added a payment method</p>
                                        <button className='btn rounded-0 mt-2 btn_group me-3 mt-3' type='submit'><span>Add Payment Method</span></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='user_info  px-0 px-lg-5 mx-0 mx-lg-4'>
                        <h5 className='border-bottom py-3 mb-3 fw-bold'>Payment History</h5>
                        <div className="container ">
                            <div className="row row-cols-2">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Payment History</label>
                                        <div className='border d-flex justify-content-center align-items-center p-3'>
                                            <p className='m-0 p-0 text-center small'>You have not made any payment.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <button className='btn rounded-0 mt-2 btn_group me-3' type='submit'><span>Save</span></button>
                                <button className='btn rounded-0 mt-2 btn_group' type='submit'><span>Cancel</span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>



        </div>
    )
}

export default AccountSettings