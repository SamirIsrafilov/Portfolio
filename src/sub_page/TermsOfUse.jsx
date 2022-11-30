import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';


const TermsOfUse = () => {
    return (
        <div>
            <section className='sub_page_header '>
                <div className='sub_header d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-white text-center'>Terms of Use</h1>
                    <ul className='list-unstyled d-flex'>
                        <li className='me-3 text-muted'><FaHome /></li>
                        <li><Link className='text-muted sub_header_menu' to="/">Home</Link></li>
                        <li className='mx-3 text-muted '><FaChevronRight /></li>
                        <li><Link className='text-muted sub_header_menu' to="#">Terms of Use</Link></li>
                    </ul>
                </div>
            </section>

            <section className='container py-5 my-5'>
                <div className='px-0 px-md-5 mx-0 mx-md-5'>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>1. Description of Service and Acceptance of Terms of Use</h2>
                    <p style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi
                        ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus
                        sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor.
                        Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                </div>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>2. The Ava Stream website works best with:</h2>
                    <p style={{fontSize: "14px"}}>Latest version of Google Chrome<br />
                        Latest version of Firefox<br />
                        Latest version of Safari<br />
                        JavaScript and cookies enabled<br />
                    </p>
                </div>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>3. Subscription Services</h2>
                    <p style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi
                        ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus
                        sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor.
                        Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                </div>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>4. Third Party Payment Gateway - Financial Information</h2>
                    <p style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi
                        ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus
                        sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor.
                        Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                </div>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>5. Disclosure Children's Privacy</h2>
                    <p style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi
                        ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus
                        sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor.
                        Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                </div>
                <div className='my-2'>
                    <h2 className='fw-bold' style={{fontSize: "32px"}}>6. Data transfer, storage & processing globally</h2>
                    <p style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi
                        ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus
                        sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor.
                        Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                </div>
                </div>
                
                
                
                

            </section>
        </div>
    )
}

export default TermsOfUse