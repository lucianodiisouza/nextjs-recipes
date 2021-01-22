import { useState, useEffect } from "react";
import { Header, Footer, RecipeCategory } from "../components";
import { RecipeService } from "../services/RecipeService";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    RecipeService.listAll().then(setList);
  }, []);

  return (
    <div>
      <Header title="NextRecipes" />
      <RecipeCategory recipeList={list} category="doces" />

      <Footer />
    </div>
  );
}
