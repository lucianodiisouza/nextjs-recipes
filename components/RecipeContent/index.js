import { Header, Footer } from "../index";
import RecipeContentStyled from "./styles";

export default function RecipeContent(props) {
  return (
    <div>
      <style jsx>{RecipeContentStyled}</style>
      <Header title={`NextRecipes - ${props.name}`} />
      <article className="recipe-body">
        <h1 className="recipe-name">{props.name}</h1>
        <img src={props.picture} alt={props.name} className="recipe-picture" />
        <div>
          <i className="fas fa-stopwatch fa-fw" /> Preparo: {props.time} <br />
          <i className="fas fa-utensils fa-fw " /> Rendimento: {props.servings}{" "}
          <br />
        </div>
        {props.children}
      </article>
      <Footer />
    </div>
  );
}
