import React from 'react';
import { Restaurant } from '../Restaurant/Restaurant.jsx';
import './RestaurantList.css'

export const RestaurantList = (props) => {

    return (
        <div className='RestaurantList'>
            {props.restaurants.map((restaurant) => {
                return <Restaurant key={restaurant.id} restaurant={restaurant} />
            })}
        </div>
    );
}