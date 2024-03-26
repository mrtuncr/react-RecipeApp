import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const RecipeProvider = ({children}) => {

    //for login and privaterouter pages
const [name, setName]=useState(localStorage.getItem("username") || "");
const [password, setPassword]=useState(localStorage.getItem("password") || "");

    //home header and recipeCard pages
const [recipes,setRecipes]=useState([]);
const [query,setQuery]=useState("");
const [mealType,setMealType]=useState("Breakfast");

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    



  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        setQuery,
        setMealType,
        recipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider