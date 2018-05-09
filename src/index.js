import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipesApp from './components/RecipesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipesApp />, document.getElementById('root'));
registerServiceWorker();
