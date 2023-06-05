import React from 'react'
import {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeContainer from './RecipeContainer.jsx'



const HomeScreen = () => {  

  console.log("HOME SCREEN is CALLED")
  const [recipes, setRecipes] = useState([])

  const  getRecipes =  () => {
     axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            setRecipes(res.data)
            console.log("FROM DEVM",res.data)
        }).catch(err => {
          console.log(err);
          return null;
      });
}

useEffect(() => {
    getRecipes()
},[])

  return (
    <div>
     
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
      {/* Much code from Part 2 will be placed around here. Do your best! */}

    </div>
  )
}

export default HomeScreen