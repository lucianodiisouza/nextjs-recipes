import slugify from "slugify";
import Link from "next/link";
import RecipeCategoryStyled from "./styles";
import RecipeCard from "../RecipeCard";
import { capitalize } from "@material-ui/core";

function createRecipeUrl(recipe) {
  const category = slugifyCategory(recipe.category);
  const recipeId = `${recipe.id}-${slugify(recipe.name).toLowerCase()}`;
  return `/receitas/${category}/${recipeId}`;
}

function slugifyCategory(category) {
  return slugify(category).toLowerCase();
}

export default function RecipeCategory({
  category,
  recipeList,
  maxElements = 3,
}) {
  const recipes = recipeList
    .filter((recipe) => recipe.category === category)
    .slice(0, maxElements);
  return (
    <div className="recipe-category">
      <style jsx>{RecipeCategoryStyled}</style>
      <Link href={`/receitas/${slugifyCategory(category)}`}>
        <a>
          <h2 className="category-name">{capitalize(category)}</h2>
        </a>
      </Link>
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            picture={recipe.img}
            category={recipe.category}
            link={createRecipeUrl(recipe)}
          />
        ))}
      </div>
    </div>
  );
}
