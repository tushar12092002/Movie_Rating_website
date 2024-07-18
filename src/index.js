import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './App_vs-1';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating = {5} size={24} color='darkblue' messages = {["terrible" , "bad" , 'okay' , 'good'
     ,"amazing"]}> */}

    {/* </StarRating> */}
  </React.StrictMode>
);

