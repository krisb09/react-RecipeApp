import React, { useState } from 'react'
import Axios from 'axios'
import '../styles/UseFetch.css'
import Recipe from './Recipe'



    const APP_ID = "xxxxxxxx";
    const APP_KEY = "xxxxxxxxxx";

 

function UseFetch() {
    const [ search, setSearch] = useState("");
    const [ recipes, setRecipes ] = useState([])
   


     const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&health=alcohol-free`;

     async function getRecipes() {
         const result = await Axios.get(url);
         setRecipes(result.data.hits)
         console.log(result.data);
     }


     const onSubmit = (e) => {
         e.preventDefault();
         getRecipes();
     }
     
    return (
      <div className="result">
        <h1>Search Recipes</h1>

        <form className="searchForm" onSubmit={onSubmit}>
          <input
            className="input-form"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <Link to='/recipes'> */}
          <input className="search-button" type="submit" value="Go" />
          {/* </Link> */}
        </form>
          {/* map API */}
          <div className="result_recipes">
            {recipes.map((recipe) => {
              return <Recipe recipe={recipe} />;
            })}
          </div>
        
      </div>
    );
}

export default UseFetch;
