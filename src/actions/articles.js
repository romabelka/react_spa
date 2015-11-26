import Dispatcher from '../dispatcher'
import {Action} from './Action'
import {ADD_ARTICLE} from './constants'


export const addArticle = (title) => {
    Dispatcher.dispatch(new Action(ADD_ARTICLE, {title}))
}