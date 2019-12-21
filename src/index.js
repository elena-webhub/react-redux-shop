import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import CategoriesApp from './containers/CategoriesApp';
import ItemsApp from './containers/ItemsApp';
import ItemInfoApp from './containers/ItemInfoApp';

import createStore from './store';


const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/categories" component={CategoriesApp}/>
            <Route path="/items" component={ItemsApp}/>
            <Route path="/info" component={ItemInfoApp}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
