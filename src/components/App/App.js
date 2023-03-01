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

const restaurants = [restaurant,restaurant,restaurant,restaurant,restaurant,restaurant];

export const  App = () => {
  return (
    <div className="App">
      
      <h1>Little Avac<img className="logo" src={logo} />do</h1>
      <Search />
      <RestaurantList restaurant={restaurants}/>
    </div>
  );
}

export default App;