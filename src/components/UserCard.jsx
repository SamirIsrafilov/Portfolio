import React from 'react';

const UserCard = ({img,title,job}) => {
    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 card border-0 rounded-0 bg-transparent mb-5" id='user_card' >
            <div id='user_card_img'>
                <img src={img} className="card-img-top rounded-0" alt="..." />
            </div>
            <div className="card-body" id='user_card_body' style={{ backgroundColor: "#202020" }}>
                <h4 className='fw-bold'>{title}</h4>
                <p>{job}</p>
            </div>
        </div>
    )
}

export default UserCard ;