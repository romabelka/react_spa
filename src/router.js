import React from 'react'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './App'
import Articles from './components/Articles'
import Article from './components/Article'
import NewArticle from './components/NewArticle'

const Routes = (
    <Router history = {createBrowserHistory()}>
        <Route path = "/" component = {App}>
            <Route path = "articles" component = {Articles} />
            <Route path = "articles/new" component = {NewArticle} />
            <Route path = "articles/:id" component = {Article} />
        </Route>
    </Router>
)

export default Routes