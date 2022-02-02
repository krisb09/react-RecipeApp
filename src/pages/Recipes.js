import React from 'react';
import UseFetch from '../components/UseFetch';
import Navbar from '../components/Navbar' 
import '../styles/Recipe.css'

function Recipes() {
  return (
        <div>
            <Navbar />
            <UseFetch />
        </div>
  );
}

export default Recipes;
