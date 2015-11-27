import Dispatcher from '../dispatcher'
import {Action, asyncAC} from './Action'
import {ADD_ARTICLE} from './constants'
import {loadAll} from './api/articles'


export const addArticle = (title) => {
    Dispatcher.dispatch(new Action(ADD_ARTICLE, {title}))
}

export const loadArticles = asyncAC('LOAD_ARTICLE', loadAll())