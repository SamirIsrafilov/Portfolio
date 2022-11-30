import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Gif from '../img/freecart.gif';

const FavoriteMovie = () => {
    const {
        isEmpty,
        emptyCart,
        items
    } = useCart();
    if (isEmpty) return <div className=" d-flex align-items-center justify-content-center my-5 py-5"><img src={Gif} className="img-fluid" alt="" /></div>;
    return (
        <div>
            <section className='container  my-5 py-5'>
                <div className='row'>
                    {items.map((fditem) => {
                        return (
                            <div key={fditem.id} className="card border-0 rounded-0 bg-transparent col-6 col-sm-6 col-md-4 col-lg-2 my-3" id='movie_card' >
                                <div className='position-relative' id='card_img'>
                                    <img src={fditem.img} className="card-img-top rounded-0" alt="..." />
                                </div>
                                <div className="card-body ps-0">
                                    <Link to='/play' className="text-white text-decoration-none fw-semibold " id='card_title'>{fditem.title}</Link>
                                    <ul className='d-flex list-unstyled mt-2' id='movie_desc'>
                                        <li className='text-muted'>2021</li>
                                        <li className='text-muted mx-3'>+18</li>
                                        <li className='text-muted'>Action</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='btn btn-outline-light rounded-0 mt-3' onClick={() => { emptyCart() }} style={{width:"100%"}}>Cart Clear</button>
            </section>
        </div>
    )
}

export default FavoriteMovie