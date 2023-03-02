import React from 'react';
import './Search.css'
import { useState } from 'react';

export const Search = (props) => {

    const [search, setSearch] = useState({
        'term':'a',
        'location': 'a',
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

    const handleSortByChange = (sortByOptionValue, search) => {
        setSearch( {
            ...search,
            sortBy: sortByOptionValue
        })
    }

    const handleTermChange = (event, search) => {

        setSearch({
            ...search,
            term: event.target.value
        })
    }
    
    const handleLocationChange = (event, search) => {
        setSearch({
            ...search,
            location: event.target.value
        })
    }

    const handleSubmit = () => {
        props.searchYelp(search);
    }

    const renderSortByOption = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li onClick={() => handleSortByChange(sortByOptionValue, search)} className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        })
        
    }

    return (
        <div className="SearchBar">
            <video className="SearchBarVideo"  autoPlay playsInline  muted loop>
                <source  src='/Videos/background_search.mp4'  type="video/mp4" />
            </video>
            <div className="SearchBar-sort-options ">
                <ul>
                {renderSortByOption(search)}
                </ul>
            </div>
            <div className="SearchBar-fields ">
                <input onChange={(event) => handleTermChange(event, search)} placeholder="Find Restaurants"  value={search.term} />
                <input onChange={(event) => handleLocationChange(event, search)} placeholder="address, neighborhood, city, state or zip" value={search.location} />
            </div>
            <div onClick={() => handleSubmit ()} className="SearchBar-submit">
                <a>SEARCH</a>
            </div>
        </div>
    )
}
