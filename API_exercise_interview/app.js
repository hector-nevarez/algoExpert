const express = require('express')
const app = express()
const data = require("./data.json")
module.exports = app

app.get("/recipes", (req, res, next) => {
    const recipes = {
        "recipeName": []
    };
    const dataRecipes = data.recipes;
    if (!dataRecipes) {
        return res.send("No recipes yet");
    }
    for (let idx = 0; idx < dataRecipes.length; idx++) {
        recipes.recipeName.push((dataRecipes[idx].name));
    }
    res.status(200).send(recipes)
})

app.get("/details/:recipe", (req, res, next) => {
    // console.log('----------------------------------------------------');
    const { recipe } = req.params;
    const recipes = {
        "details": {}
    };
    const dataRecipes = data.recipes;
    let errorCount=0;
    for (let idx = 0; idx < dataRecipes.length; idx++) {
        if (dataRecipes[idx].name === recipe) {
            recipes.details["ingredients"] = (dataRecipes[idx].ingredients);
            recipes.details["numSteps"] = (dataRecipes[idx].instructions.length);
        } else{
            errorCount++;
        }
    }
    if (errorCount === 3) {
        // console.log('Thisi passing??')
        res.status(404).send({
            "error": "Recipe does not exist"
        })
    } else {
        // console.log('This is the data:', recipes.details);
        res.status(200).send(recipes)
    }
})