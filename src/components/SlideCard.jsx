import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
// import moviedata from '../data/moviedata';


const SlideCard = ({ img, title, movies }) => {
    const { addItem } = useCart();
    return (
        <div className="card border-0 rounded-0 bg-transparent  " id='movie_card' >
            <div id='card_img'>
                <img src={img} className="card-img-top rounded-0" alt="..." />
                <div id='box_content'>
                    <ul className='list-unstyled m-0'>
                        <li><Link className='card_icon' to="/play"><FaPlay /></Link></li>
                        <li className='my-2'><Link className='card_icon'  onClick={() => addItem(movies)} to="#"><FaPlus /></Link></li>
                        <li><Link className='card_icon' to="/movieinfo"><FaInfo /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="card-body ps-0">
                <Link to='/movieinfo' className="text-white text-decoration-none fw-semibold text-uppercase " id='card_title'>{title}</Link>
                <ul className='d-flex list-unstyled mt-2' id='movie_desc'>
                    <li className='text-muted'>2021</li>
                    <li className='text-muted mx-3'>+18</li>
                    <li className='text-muted'>Action</li>

                </ul>
            </div>
        </div>


    )
}

export default SlideCard;


