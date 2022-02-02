import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import Ingredients from './Ingredients';
import '../styles/Recipe.css'

function Recipe({ recipe }) {
  const [show, setShow] = useState(false)

  const { ingredients } = recipe.recipe;
    return (
      recipe["recipe"]["image"].match(/\.(jpeg|jpg|png|gif)$/) != null && (
        <Container>
          <div className="recipeImg">
            <img className="recipe_img" src={recipe["recipe"]["image"]} />
            <p>
              <p className="recipe_name">{recipe["recipe"]["label"]}</p>
              <button
                className="button"
                onClick={() => {
                  window.open(recipe["recipe"]["url"]);
                }}
              >
                Recipe
              </button>
            </p>

            <button className="button" onClick={() => setShow(!show)}>
              Ingredients
            </button>
            {show && <Ingredients ingredients={ingredients} />}
          </div>
        </Container>
      )
    );
}

export default Recipe
