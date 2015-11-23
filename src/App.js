import React, {Component} from 'react'
import {articles} from './stores'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {articles : articles.getAll()}
    }

    componentWillMount() {
        articles.addChangeListener(this.articlesChange)
    }
    componentWillUnmount() {
        articles.removeChangeListener(this.articlesChange)
    }
    render() {
        const {articles} = this.state
        const items = articles.map((article, index) => <li key={index}>{article.name}</li>)
        return (
            <div>
                <h1>All articles</h1>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

    articlesChange() {
        this.setState({
            articles: articles.getAll()
        })
    }
}

export default App