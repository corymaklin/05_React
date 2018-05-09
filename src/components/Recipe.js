import React, { Component } from 'react';
import '../styles/Recipe.css';

class Recipe extends Component {
    static defaultProps = {
        
    }

    render() {
        const {title, image, instructions} = this.props;
        const ingredients = this.props.ingredients.map( (value, index) => <li key={index}>{value}</li>)
        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={image} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        );
    }
}

export default Recipe;