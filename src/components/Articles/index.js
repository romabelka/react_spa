import React, {Component, PropTypes} from 'react'
import {articles} from '../../stores'

class Articles extends Component {
    constructor() {
        super()
        articles.addChangeListener(this._onArticlesChange)
        this.state = {
            articles : articles.getOrLoadAll(),
            loading : articles.loading,
            loaded : articles.loaded
        }
    }

    componentWillUnmount() {
        articles.removeChangeListener(this._onArticlesChange)
    }

    render() {
        const articles = this.state.articles.map((article) => {
            return <li key={article.id}>{article.title}</li>
        })
        return (
            <div>
                <h3>Articles index page</h3>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }

    _onArticlesChange = () => {
        this.setState({
            articles : articles.getOrLoadAll(),
            loading : articles.loading,
            loaded : articles.loaded
        })
    }
}

export default Articles