import React, {Component} from 'react'
import {articles} from './stores'
import {addArticle} from './actions/articles'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {articles : articles.getAll()}
    }

    componentWillMount() {
        articles.addChangeListener(::this.articlesChange)
    }
    componentWillUnmount() {
        articles.removeChangeListener(::this.articlesChange)
    }
    render() {
        const {articles} = this.state
        const items = articles.map((article, index) => <li key={index}>{article.title}</li>)
        return (
            <div>
                <h1>All articles</h1>
                <ul>
                    {items}
                </ul>
                <a href="#" onClick = {::this.addArticle}>Add article</a>
            </div>
        )
    }

    addArticle(ev) {
        ev.preventDefault()
        addArticle('some default article')
    }
    articlesChange() {
        this.setState({
            articles: articles.getAll()
        })
    }
}

export default App