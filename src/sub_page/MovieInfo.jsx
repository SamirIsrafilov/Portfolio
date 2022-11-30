import React from 'react';
import Video from '../img/01-video.mp4';
import CartImg from '../img/latest-movies/latest-movies_05.jpg';
import TopLogo from '../img/top-movies.png';
import DtsLogo from '../img/dts-logo.png';
import { FaUser } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FiSmile } from 'react-icons/fi';
import { IoMdFootball } from 'react-icons/io';
import { GiEarthAmerica } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaShareAlt } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import moviedata from '../data/moviedata';
import MovieCart from '../components/MovieCart';
import { t } from 'i18next';


const MovieInfo = () => {
    return (
        <div>
            <section className='movie_info_header'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-center'  id='circle_title' >
                        <div className="spinner-wrap">
                            <div className="spinner-item d-flex align-items-center justify-content-center">  </div>
                            <Link to="/play" className='text-white fs-4' id='play_circle'><FaPlay /></Link>
                        </div>
                        <h2 className='fw-bold ms-4'>Play The Dark Knight Rises</h2>
                   
                    </div>
                </div>
            </section>


            <section className='my-5 py-5 dark_knight'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className='position-relative' id='play_cart_img'>
                                <img src={CartImg} className='img-fluid' alt="" />
                                <img src={TopLogo} className="img-fluid position-absolute top-0 start-0 mt-3 ms-3" alt="" />
                            </div>
                            <ul className='list-unstyled d-flex justify-content-around mt-3 text-muted'>
                                <li>1080p</li>
                                <li>24p</li>
                                <li><img src={DtsLogo} className='img-fluid' alt="" /></li>
                                <li> 7.1</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-9">
                            <h1 className='fw-bold  my-4'>THE DARK KNIGHT RISES</h1>
                            <ul className='list-unstyled d-flex flex-wrap ' style={{ color: "#a3a3a3" }}>
                                <li className='me-3 small fs-md-6 d-flex justify-content-center align-items-center'><FaUser className='me-2' />18+</li>
                                <li className='mx-3 small fs-md-6  d-flex justify-content-center align-items-center'><MdOutlineWatchLater className='me-2' />  2hr 45min</li>
                                <li className='mx-3 small fs-md-6  d-flex justify-content-center align-items-center'><FiSmile className='me-2' /> 2022</li>
                                <li className='mx-3 small fs-md-6  d-flex justify-content-center align-items-center'><IoMdFootball className='me-2' /> Action</li>
                                <li className='mx-3 small fs-md-6  d-flex justify-content-center align-items-center'><GiEarthAmerica className='me-2' />  United States</li>
                            </ul>
                            <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <div className='row mt-4'>
                                <div className='col-12 col-lg-4'>
                                    <h5 className='fw-bold'>Director</h5>
                                    <p className='small'>Christopher Nolan</p>
                                </div>
                                <div className='col-12 col-lg-8'>
                                    <h5 className='fw-bold'>Cast</h5>
                                    <p className='small'>Christian Bale, Michael Cain, Gary Oldman, Anne<br />
                                        Hathway, Tom Hardy, Marion Cotillard
                                    </p>
                                </div>
                            </div>

                            <div >
                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <Link to="/play" className='btn rounded-0 mt-2 btn_group'><span><FaPlay /> Play</span></Link>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <Link to="/favorite" className='btn rounded-0 mt-2 btn_group'><span><FaPlus /> List</span></Link>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        {/* <Link to="#" className='btn rounded-0 mt-2 btn_group'><span><RiMovie2Fill /> Trailer</span></Link> */}


                                        <div>
                                            {/* Button trigger modal */}
                                            <Link to="#" type="button" className='btn rounded-0 mt-2 btn_group' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <span><RiMovie2Fill /> Trailer</span>
                                            </Link>
                                            {/* Modal */}
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content rounded-0">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fw-bold text-dark fs-5" id="staticBackdropLabel">Trailer</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body">
                                                            <video style={{ width: "100%" }} controls>
                                                                <source src={Video} type="video/mp4" />
                                                                <source src={Video} type="video/ogg" />
                                                            </video>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-6 col-xl-3">
                                        {/* <Link to="#" className='btn rounded-0 mt-2 btn_group'><span><FaShareAlt /> Share</span></Link> */}

                                        <div>
                                            {/* Button trigger modal */}
                                            <Link to="#" type="button" className="btn rounded-0 mt-2 btn_group" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                <span><FaShareAlt /> Share</span>
                                            </Link>
                                            {/* Modal */}
                                            <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content rounded-0">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5 fw-bold text-dark" id="exampleModalLabel">Share</h1>
                                                            <button type="button" className="btn-close fw-bold" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body d-flex justify-content-around p-3">
                                                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                <span className='text-dark d-flex align-items-center justify-content-center' style={{ width: "61px", height: "61px" }}><FaTwitter className='fs-5' /></span>
                                                                <p className='text-dark small text-center'>Twitter</p>
                                                            </div>

                                                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                <span className='text-dark d-flex align-items-center justify-content-center' style={{ width: "61px", height: "61px" }}><FaFacebook className='fs-5' /></span>
                                                                <p className='text-dark small text-center'>Facebook</p>
                                                            </div>

                                                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                <span className='text-dark d-flex align-items-center justify-content-center' style={{ width: "61px", height: "61px" }}><FaInstagram className='fs-5' /></span>
                                                                <p className='text-dark small text-center'>Instagram</p>
                                                            </div>

                                                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                <span className='text-dark d-flex align-items-center justify-content-center' style={{ width: "61px", height: "61px" }}><FaTelegram className='fs-5' /></span>
                                                                <p className='text-dark small text-center'>Telegram</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className='container related_moviespy-5 my-5 '>
                <h2 className='text-white fw-bold my-5 section_title ms-0 '>RELATED MOVIES</h2>

                <div className="row">
                    {moviedata[5].map((fd, i) => {
                        return <MovieCart img={fd.img} title={t(`movietitle.${i+31}`)} key={i} />

                    })}
                </div>
            </section>
        </div>
    )
}

export default MovieInfo