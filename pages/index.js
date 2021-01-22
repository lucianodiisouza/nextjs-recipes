import { useMemo } from "react";
import { Header, Footer, RecipeCategory } from "../components";
import { RecipeService } from "../services/RecipeService";

export async function getStaticProps(context) {
  const totalItems = 30;
  const recipes = (await RecipeService.listAll()).slice(0, totalItems);

  return {
    props: {
      recipes,
    },
  };
}

export default function Home({ recipes }) {
  const categories = useMemo(() => {
    const categoriesList = {};
    recipes.forEach((recipe) => {
      categoriesList[recipe.category] = true;
    });
    return Object.keys(categoriesList).sort();
  }, [recipes]);

  return (
    <div>
      <Header title="NextRecipes" />
      {categories.map((category) => (
        <RecipeCategory
          key={category}
          recipeList={recipes}
          category={category}
        />
      ))}

      <Footer />
    </div>
  );
}
