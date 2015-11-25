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
        return (
            <section>
                <h1>News App</h1>
                {this.props.children}
            </section>
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