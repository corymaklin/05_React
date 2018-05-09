import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipesList from './RecipesList';
import '../styles/RecipesApp.css';


class RecipesApp extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RecipesList />
            </div>
        );
    }
}

export default RecipesApp;