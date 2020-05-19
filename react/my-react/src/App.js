import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return(
    <div>
    <div>Header</div>
    <div>Hello my World</div>
    <div className="App">
    <ul>
    <li>fish</li>
    <li>cat</li>
    <li>plane</li>
    </ul>

    </div>
    </div>
  );
}
const Header = () => {
  return(
  <div>
  <ul>
  <li><a href="#">Home</a></li>
<li><a href="#">About As</a></li>
<li><a href="#">Project</a></li>
<li><a href="#">Team</a></li>
<li><a href="#">Contact</a></li> 
</ul>
</div>
  );
}
export default App;
