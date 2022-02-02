import React from 'react';
import { Container } from 'react-bootstrap'
import '../styles/Cuisine.css'

function Cuisine() {
  return (
    <Container>
      <div className="section cuisine">
        <div className="col img">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190418-skinny-alfredo-vertical-1-1556225479.png?crop=1xw:1xh;center,top&resize=980:*"
            alt=""
            style={{ width: 500, height: 600 }}
          />
        </div>
        <div className="col typography">
          <h1 className="title">Healthy Eating</h1>
          <a href="https://www.delish.com/cooking/recipe-ideas/recipes/a45568/skinny-alfredo-recipe/">
            <button className="button1">learn more</button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cuisine;
