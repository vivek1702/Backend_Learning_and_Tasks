const { initializeDB } = require("./db/db.connect");
const Recipe = require("./models/Recipe.model");
const express = require("express");

const app = express();
app.use(express.json());

//connection to DB
initializeDB();

//Seed new data into Database using postman api
async function SeedRecipesDetails(newData) {
  try {
    const recipe = new Recipe(newData);
    if (!recipe) {
      console.log("Unable to get data from  api body");
    } else {
      const saveData = await recipe.save();
      return saveData;
    }
  } catch (error) {
    console.log(`unable to seed data to DB ${error}`);
  }
}

app.post("/recipe", async (req, res) => {
  try {
    const recipeBody = req.body;
    if (
      !recipeBody.title &&
      !recipeBody.author &&
      !recipeBody.difficulty &&
      !recipeBody.prepTime &&
      !recipeBody.cookTime &&
      !recipeBody.ingredients &&
      !recipeBody.instructions
    ) {
      res.status(400).json({ error: "all the field are required" });
    } else {
      await SeedRecipesDetails(recipeBody);
      res.status(201).json({ message: "new data added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//get all the data from recipe model
async function AllRecipeData() {
  try {
    const recipe = Recipe.find();
    return recipe;
  } catch (error) {
    throw error;
  }
}
app.get("/recipe", async (req, res) => {
  try {
    const recipe = await AllRecipeData();
    if (!recipe) {
      res.status(400).json({ error: "recipe not found" });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//get recipe data by title
async function RecipeBytitle(titleName) {
  try {
    const recipe = Recipe.findOne({ title: titleName });
    return recipe;
  } catch (error) {
    throw error;
  }
}
app.get("/recipe/title/:titleName", async (req, res) => {
  try {
    const recipe = await RecipeBytitle(req.params.titleName);
    if (!recipe) {
      res.status(400).json({ error: "recipe title not found" });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//get recipe data by author
async function RecipeByAuthor(authorName) {
  try {
    const recipe = Recipe.find({ author: authorName });
    return recipe;
  } catch (error) {
    throw error;
  }
}
app.get("/recipe/author/:authorName", async (req, res) => {
  try {
    const recipe = await RecipeByAuthor(req.params.authorName);
    if (!recipe) {
      res.status(400).json({ error: "recipe not found" });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//get recipe data by difficulty level
async function RecipeByDifficulty(difficultyLevel) {
  try {
    const recipe = Recipe.find({ difficulty: difficultyLevel });
    return recipe;
  } catch (error) {
    throw error;
  }
}
app.get("/recipe/difficulty/:level", async (req, res) => {
  try {
    const recipe = await RecipeByDifficulty(req.params.level);
    if (!recipe) {
      res.status(400).json({ error: "Recipe not found" });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//update the recipe data by id
// Update the difficulty of "Spaghetti Carbonara" from "Intermediate" to "Easy".
async function updateRecipeByID(recipeId, dataToupdate) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(recipeId, dataToupdate, {
      new: true,
    });
    return recipe;
  } catch (error) {
    console.log("unable to get data from DB");
  }
}

app.post("/recipe/:recipeID", async (req, res) => {
  try {
    const recipe = await updateRecipeByID(req.params.recipeID, req.body);
    if (!recipe) {
      res.status(400).json({ error: "unable to get data into recipe" });
    } else {
      res
        .status(201)
        .json({ message: "data updated successfully", updatedData: recipe });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

// Update the details of the recipe "Chicken Tikka Masala".
// Send an error message "Recipe not found" if the recipe is not found.
// Updated recipe data: { "prepTime": 40, "cookTime": 45 }
async function updateRecipeBytitle(recipeTitle, dataToupdate) {
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { title: recipeTitle },
      dataToupdate,
      {
        new: true,
      }
    );
    return recipe;
  } catch (error) {
    console.log("unable to get data from DB");
  }
}

app.post("/recipe/title/:titleName", async (req, res) => {
  try {
    const recipe = await updateRecipeBytitle(req.params.titleName, req.body);
    if (!recipe) {
      res.status(400).json({ error: "unable to get data into recipe" });
    } else {
      res
        .status(201)
        .json({ message: "data updated successfully", updatedData: recipe });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//delete the data by id
async function DeleteRecipeByID(recipeId) {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    return deletedRecipe;
  } catch (error) {
    throw error;
  }
}

app.delete("/recipe/:recipeID", async (req, res) => {
  try {
    const recipe = await DeleteRecipeByID(req.params.recipeID);
    if (!recipe) {
      res.status(400).json({ error: "data not found" });
    } else {
      res.status(201).json("data deleted successfully");
    }
  } catch (error) {
    res.status(500).json({ error: "unable to delete data" });
  }
});

module.exports = app;

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log("app is running on port", PORT);
// });
