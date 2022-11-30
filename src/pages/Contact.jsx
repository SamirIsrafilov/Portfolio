import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';


const Contact = () => {
    return (
        <div>
            <section className='sub_page_header '>
                <div className='sub_header d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-white text-center mb-3'>Conatct Us</h1>
                    <ul className='list-unstyled d-flex'>
                        <li className='me-3 text-muted'><FaHome /></li>
                        <li><Link className='text-muted sub_header_menu' to="/">Home</Link></li>
                        <li className='mx-3 text-muted '><FaChevronRight /></li>
                        <li><Link className='text-muted sub_header_menu' to="#">Conatct Us</Link></li>
                    </ul>
                </div>
            </section>
            <section className='contact_form my-5'>
                <div className='d-flex flex-column justify-content-center align-items-center py-5'>
                    <h2 className='text-white fw-bold mb-4'>How Can We Help?</h2>
                    <p className='text-white text-center'>Talk to one of our consultants today and learn how to start leveraging your business.</p>
                </div>
                <form className="container text-center pb-5" onSubmit={e => { e.preventDefault();}}>
                    <div className="row row-cols-2" id='input_group'>
                        <div className="col-12 col-sm-6 my-2 "> <input type="text" className="form-control text-white" required placeholder="Name" /></div>
                        <div className="col-12 col-sm-6 my-2"> <input type="email" className="form-control text-white"required placeholder="Email" /></div>
                        <div className="col-12 col-sm-6 my-2"> <input type="number" className="form-control text-white"required placeholder="Phone" /></div>
                        <div className="col-12 col-sm-6 my-2"> <input type="text" className="form-control text-white" required placeholder="Subject" /></div>
                        <div className="col-12  my-2"> <textarea className="form-control bg-transparent rounded-0 text-white" required placeholder='Message' rows="3"></textarea></div>
                    </div>
                    <button className='btn rounded-0 mt-2 btn_group' type='submit '><span>Send Message</span></button>
                </form>
            </section>
        </div>
    )
}
export default Contact;