import { useState } from "react";
import Head from "next/head";
import {
  Paper,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";

import { RecipeService } from "../../services/RecipeService";

export default function Cadastro() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [servings, setServings] = useState("");
  const [time, setTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newDirection, setNewDirection] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  function resetForm() {
    setName("");
    setImg("");
    setCategory("");
    setServings("");
    setTime("");
    setIngredients([]);
    setDirections([]);
  }

  async function addRecipe() {
    const fieldsLength = [
      img,
      name,
      category,
      servings,
      time,
      ingredients,
      directions,
    ].map((item) => item.length);

    if (fieldsLength.includes(0)) {
      return false;
    }

    await RecipeService.create({
      img,
      name,
      category,
      servings,
      time,
      ingredients,
      directions,
    });

    resetForm();
  }

  function addIngredient() {
    if (newIngredient && ingredients.indexOf(newIngredient) === -1) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  }

  function removeIngredient(ingredientToRemove) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  }

  function addDirections() {
    if (newDirection && directions.indexOf(newDirection) === -1) {
      setDirections([...directions, newDirection]);
      setNewDirection("");
    }
  }

  function removeDirections(directionToRemove) {
    setDirections(
      directions.filter((direction) => direction !== directionToRemove)
    );
  }

  return (
    <div>
      <Head>
        <title>Cadastro de Receitas</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <h1>Cadastro de Receitas</h1>

      <Paper
        style={{ margin: "24px auto", maxWidth: "800px", padding: "12px" }}
      >
        <Grid container spacing={2}>
          <Grid item container justify={"center"}>
            <img width={250} src={img} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={img}
              onChange={(e) => setImg(e.target.value)}
              label="Imagem"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Categoria"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={time}
              onChange={(e) => setTime(e.target.value)}
              label="Tempo de preparo"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              label="Rendimento"
              fullWidth
            />
          </Grid>

          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <h2>Ingredientes</h2>
            </Grid>
            <Grid item container xs={12}>
              <List>
                {ingredients.map((ingredient) => (
                  <ListItem key={ingredient}>
                    <ListItemText>{ingredient}</ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        color={"secondary"}
                        onClick={() => removeIngredient(ingredient)}
                      >
                        X
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={10}>
                <TextField
                  label="Novo ingrediente"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant={"outlined"} onClick={addIngredient}>
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <h2>Modo de Preparo</h2>
            </Grid>
            <Grid item container xs={12}>
              <List>
                {directions.map((direction) => (
                  <ListItem key={direction}>
                    <ListItemText>{direction}</ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        color={"secondary"}
                        onClick={() => removeDirections(direction)}
                      >
                        X
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={10}>
                <TextField
                  label="Etapa de preparo"
                  value={newDirection}
                  onChange={(e) => setNewDirection(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant={"outlined"} onClick={addDirections}>
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={2} justify="center">
            <Grid item>
              <Button color="secondary" variant="outlined" onClick={resetForm}>
                Limpar formulário
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="outlined" onClick={addRecipe}>
                Salvar receita
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
