import React from 'react';
import './Restaurant.css'

export const Restaurant = (props) => {

    

    return(
            <div className="Restaurant">
                <div className="image-container">
                    <img className="Restaurant-image" src={props.restaurant.imageSrc} alt=''/>
                </div>
                <h2>{props.restaurant.name}</h2>
                <div className='Restaurant-information'>
                    <div className='Restaurant-address'>
                    <p>{props.restaurant.city}</p>
                    <p>{props.restaurant.state}</p>
                    <p>{props.restaurant.zipCode}</p>
                    </div>
                    <div className="Restaurant-reviews">
                    <h3>{props.restaurant.category}</h3>
                    <h3 className="rating">{props.restaurant.rating}</h3>
                    <p>{props.restaurant.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
    )
}