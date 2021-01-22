import { useState, useEffect } from "react";
import { Header, Footer, RecipeCard } from "../components";
import { RecipeService } from "../services/RecipeService";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    RecipeService.listAll().then(setList);
  }, []);

  return (
    <div>
      <Header title="NextRecipes" />
      {list.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          link={"/"}
          category={recipe.category}
          name={recipe.name}
          picture={recipe.img}
        />
      ))}

      <Footer />
    </div>
  );
}
