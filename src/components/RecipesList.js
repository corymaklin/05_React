import React, { Component } from 'react';
import Recipe from './Recipe';
import '../styles/RecipesList.css'

class RecipesList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                image: "spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                image: "milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                image: "avocado_toast.jpg"
            }
        ]
    }
    render() {
        const recipes = this.props.recipes.map((value, index) => (
            <Recipe key={index} {...value} />
        )); 

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipesList;