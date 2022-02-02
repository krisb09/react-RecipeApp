import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Section.css";

const recipes = [
  {
    id: 1,
    img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Plantain-Fritters_EXPS_FT20_33414_F_1119_1.jpg?resize=568,568",
    title: "Plantain Fritters",
    description:
      "These golden brown plantain fritters are a favorite in West Africa, where my aunt served ...",
    url: "https://www.tasteofhome.com/recipes/plantain-fritters/",
  },
  {
    id: 2,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F12%2F07%2F9870-easy-sugar-cookies-tout-cc-2000.jpg&w=272&h=272&c=sc&poi=face&q=85",
    title: "Easy Sugar Cookies",
    description:
      "Quick and easy sugar cookies! They are really good, plain or with...",
    url: "https://www.allrecipes.com/recipe/9870/easy-sugar-cookies/",
  },
  {
    id: 3,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4576767.jpg&w=272&h=272&c=sc&poi=face&q=85",
    title: "Spinach Pomegranate Salad",
    description: "A very quick and nutritious salad made with...",
    url: "https://www.allrecipes.com/recipe/127167/spinach-pomegranate-salad/",
  },
  {
    id: 4,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4104013.jpg&w=272&h=272&c=sc&poi=face&q=85",
    title: "Creamy Chocolate Fudge",
    description:
      "This was my aunt's recipe for fudge, passed down through the...",
    url: "https://www.allrecipes.com/recipe/15821/aunt-teens-creamy-chocolate-fudge/",
  },
];

function Section() {
  return (
    <div className="container">
      <section className="grid">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe}></Recipe>;
        })}
      </section>
    </div>
  );
}

const Recipe = (props) => {
  const { img, title, description, url} = props;

  return (
    <Card style={{ width: "15rem" }} className="box">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{textDecoration:"none", color: "black"}}
              >
            {description}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// ingredients //






export default Section;
