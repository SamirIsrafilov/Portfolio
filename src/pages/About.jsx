import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import Img1 from '../img/05.png';
import userinfo from '../data/userinfo';
import UserCard from '../components/UserCard';






const About = () => {
    return (
        <div>
            <section className='sub_page_header '>
                <div className='sub_header d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-white text-center mb-3'>About Us</h1>
                    <ul className='list-unstyled d-flex'>
                        <li className='me-3 text-muted'><FaHome /></li>
                        <li><Link className='text-muted sub_header_menu' to="/">Home</Link></li>
                        <li className='mx-3 text-muted '><FaChevronRight /></li>
                        <li><Link className='text-muted sub_header_menu' to="#">About Us</Link></li>
                    </ul>
                </div>
            </section>

            <section className='container py-5 my-5 about_static'>
                <div className=' px-0 px-md-5 mx-0 mx-md-5'>
                    <h2 className='text-white fw-bold my-4  section_title'>OUR STATISTIC</h2>
                    <div className="container text-center mt-5">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <FaVideo className='static_icon' />
                                <CountUp start={0} end={12} delay={0}>
                                    {({ countUpRef }) => (
                                        <div className='my-4'>
                                            <span className='fs-1' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p>Movies</p>
                            </div>

                            <div className="col-6 col-lg-3">
                                <FaEye className='static_icon' />
                                <CountUp start={0} end={55} delay={0}>
                                    {({ countUpRef }) => (
                                        <div className='my-4'>
                                            <span className='fs-1' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p>Shows</p>
                            </div>

                            <div className="col-6 col-lg-3">
                                <FaUsers className='static_icon' />
                                <CountUp start={0} end={359} delay={0}>
                                    {({ countUpRef }) => (
                                        <div className='my-4'>
                                            <span className='fs-1' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p>Members</p>
                            </div>

                            <div className="col-6 col-lg-3">
                                <FaTrophy className='static_icon' />
                                <CountUp start={0} end={246} delay={0}>
                                    {({ countUpRef }) => (
                                        <div className='my-4'>
                                            <span className='fs-1' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <p>Awards</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='about_info py-5 '>
                <div className="container py-5">
                    <div className="row px-0 px-lg-5 mx-0 mx-lg-5">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <img src={Img1} className="card-img-top mb-4" alt="friends img" />
                        </div>
                        <div className="col-12 col-md-6 px-3">
                            <h2 className='fw-bold mb-4'>And If You Join the Experience?</h2>
                            <p className='mb-4' style={{ fontSize: "14px" }}>True friendship is perhaps the only relation that survives the trials and
                                tribulations of time and remains unconditional. A unique blend of affection,
                                loyalty, love, respect, trust and loads of fun is perhaps what describes the
                                true meaning of friendship. Similar interests, mutual respect and strong
                                attachment with each other are what friends share between each other.
                                These are just the general traits of a friendship. To experience what is
                                friendship, one must have true friends, who are indeed rare treasure.
                            </p>
                            <button className='btn rounded-0 mt-2 btn_group' type='submit'><span>Subscribe Now</span></button>
                        </div>
                    </div>
                </div>
            </section>



            <section className='container my-5 py-5 about_users'>
                <div className=' px-0 px-md-5 mx-0 mx-md-3'>
                    <h2 className='text-white fw-bold my-4  section_title'>OUR TEAM</h2>

                    <div className="container ">
                        <div className="row mt-5">
                           {
                            userinfo.map((fd,index)=>{
                                return <UserCard img={fd.img} title={fd.title} job={fd.job} key={index} />
                               })
                           }

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About;