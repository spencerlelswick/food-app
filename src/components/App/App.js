import './App.css';
import { RestaurantList } from '../RestaurantList/RestaurantList';
import { Search } from '../Search/Search';
import logo from '../../assets/images/logo512.png'
import { useState } from 'react';
import Yelp from '../../util/Yelp';



export const  App = () => {

  const [restaurants, setRestaurants] = useState([{
    "id": "Ify6US5DSjOIZnwigivwAg",
    "imageSrc": "https://s3-media1.fl.yelpcdn.com/bphoto/0pGm9qNSF6D7Z0xrYytKtg/o.jpg",
    "name": "Bistro Le Relais",
    "address": "2817 Taylorsville Rd",
    "city": "Louisville",
    "state": "KY",
    "category": "French",
    "rating": 4,
    "reviewCount": 94
},
{
    "id": "StrPaqRh8ZQP4f0ck1XGog",
    "imageSrc": "https://s3-media3.fl.yelpcdn.com/bphoto/VUR_rQK198L9Tu-sVrazkg/o.jpg",
    "name": "La Chasse",
    "address": "1359 Bardstown Rd",
    "city": "Louisville",
    "state": "KY",
    "category": "French",
    "rating": 4.5,
    "reviewCount": 154
},
{
    "id": "2bstWF0UeOpJQy1vNb_y6g",
    "imageSrc": "https://s3-media2.fl.yelpcdn.com/bphoto/RFdwTukdGNIFeTezmnLjmg/o.jpg",
    "name": "Brasserie Provence",
    "address": "150 N Hurstbourne Pkwy",
    "city": "Louisville",
    "state": "KY",
    "category": "Brasseries",
    "rating": 4,
    "reviewCount": 211
}]);


  const searchYelp = (params) => {
    // setRestaurant(Yelp.search(params.term, params.location, params.sortBy));
    Yelp.search(params.term, params.location, params.sortBy).then((restaurants) => {
      setRestaurants(restaurants)
      console.log(restaurants)
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