import React from 'react';
import { Restaurant } from '../Restaurant/Restaurant.jsx';
import './RestaurantList.css'

export const RestaurantList = (props) => {

    return (
        <div className='RestaurantList'>
            {props.restaurant.map((restaurant) => {
                return <Restaurant restaurant={restaurant} />
            })}
        </div>
    );
}