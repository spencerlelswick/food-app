import './App.css';
import { RestaurantList } from '../RestaurantList/RestaurantList';
import { Search } from '../Search/Search';
import logo from '../../assets/images/logo512.png'



const restaurant = {
  imageSrc: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=1024x1024&w=is&k=20&c=bwoUzONnFgIK65TQ7uUeSAlM78h-gCmKSR3nnGhb6AI=',
  name: 'Spencercio\'s Pizza Mamamia',
  address: '960 Louisville Rd',
  city: 'Louisville',
  state: 'KY',
  zipCode: '40202',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 2498
}

const restaurants = [
  {
    imageSrc: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Spenceroncini\'s Ristorante Italiano',
    address: '960 Louisville Rd',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40202',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 2498
  },
  {
    imageSrc: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Elswicksan Japanese Steakhouse',
    address: '231 Kentucky Rd',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40202',
    category: 'Japanese',
    rating: 4.9,
    reviewCount: 598
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4946442/pexels-photo-4946442.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Chez Elswique',
    address: '230 Crestwood Blvd',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40202',
    category: 'French',
    rating: 4.8,
    reviewCount: 228
  },
];

export const  App = () => {

  const searchYelp = (params) => {
    console.log('Searching yelp for ' + params.term + ' in ' + params.location + ' with ' + params.sortBy + ' criterion' )
  }

  return (
    <div className="App">
      
      <h1>Little Avac<img className="logo" src={logo} />do</h1>
      <Search searchYelp={searchYelp} />
      <RestaurantList restaurant={restaurants}/>
    </div>
  );
}

export default App;