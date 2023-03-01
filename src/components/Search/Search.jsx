import React from 'react';
import './Search.css'
import { useState } from 'react';

export const Search = () => {

    const [search, setSearch] = useState({
        'term':'',
        'location': '',
        'sortBy': 'best_match',
    });

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count',
    }

    const getSortByClass = (sortByOption) => {
        if(sortByOption === search.sortBy) {
            return 'active'
        } 
        return '';
    }

    const handleSortByChange = (sortByOption) => {
        setSearch( {
            sortBy: sortByOption
        })
    }

    const handleTermChange = (event) => {
        setSearch({
            term: event.target.value
        })
    }
    
    const handleLocationChange = (event) => {
        setSearch({
            location: event.target.value
        })
    }

    const handleSubmit = (event) => {
        console.log(search)
    }

    function renderSortByOption() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li onClick={handleSortByChange.bind(this, sortByOptionValue)} className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        })
        
    }

    return (
        <div className="SearchBar">
            <video className="SearchBarVideo"  playsinline autoplay muted loop>
                <source  src='/Videos/background_search.mp4' type="video/mp4" />
            </video>
            <div className="SearchBar-sort-options ">
                <ul>
                {renderSortByOption()}
                </ul>
            </div>
            <div className="SearchBar-fields ">
                <input onChange={handleTermChange} placeholder="Find Restaurants" />
                <input onChange={handleLocationChange} placeholder="address, neighborhood, city, state or zip" />
            </div>
            <div onClick={handleSubmit} className="SearchBar-submit">
                <a>SEARCH</a>
            </div>
        </div>
    )
}
