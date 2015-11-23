import AbstractStore from './AbstractStore'
import Dispatcher from '../dispatcher'
import {ADD_ARTICLE} from '../actions/constants'

class ArticleStore extends AbstractStore {
    constructor() {
        super()
        this.dispatchToken = Dispatcher.register((action) => {
            switch (action.type) {
                case ADD_ARTICLE:
                    this.add(action.data)
                    this.emitChange()
                    break
            }
        })
    }
}

export default ArticleStore