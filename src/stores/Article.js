import AbstractStore from './AbstractStore'
import Dispatcher from '../dispatcher'
import {loadArticles} from '../actions/articles'
import {
    ADD_ARTICLE,
    LOAD_ARTICLE_START,
    LOAD_ARTICLE_FAIL,
    LOAD_ARTICLE_SUCCESS
} from '../actions/constants'

class ArticleStore extends AbstractStore {
    constructor() {
        super()
        this.dispatchToken = Dispatcher.register((action) => {
            switch (action.type) {
                case ADD_ARTICLE:
                    this.add(action.data)
                    this.emitChange()
                    break
                case LOAD_ARTICLE_START:
                    this.loading = true
                    this.loaded = false
                    break;
                case LOAD_ARTICLE_SUCCESS:
                    this.addArticles(action.data.response)
                    this.loading = false
                    this.loaded = true
                    this.emitChange()
                    break
            }
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadArticles()
        return this.getAll()
    }

    addArticles(articles) {
        articles.forEach((article) => this.add(article))
    }
}

export default ArticleStore