import AbstractStore from './AbstractStore'
import ArticleStore from './Article'
import CommentStore from './Comments'

const articles = new ArticleStore
const comments = new CommentStore

export {articles, comments}