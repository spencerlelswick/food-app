import './App.css';
import { RestaurantList } from '../RestaurantList/RestaurantList';
import { Search } from '../Search/Search';
import logo from '../../assets/images/logo512.png'
import { useState } from 'react';
import Yelp from '../../util/Yelp';



export const  App = () => {

  const [restaurants, setRestaurants] = useState([]);


  const searchYelp = (params) => {
    Yelp.search(params.term, params.location, params.sortBy).then((restaurants) => {
      setRestaurants(restaurants)
    })
  }

  return (
    <div className="App">
      
      <h1>Little Avac<img className="logo" src={logo} />do</h1>
      <Search searchYelp={searchYelp} />
      <RestaurantList restaurants={restaurants}/>
    </div>
  );
}

export default App;