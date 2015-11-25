import AbstractStore from './AbstractStore'
import ArticleStore from './Article'
import CommentStore from './Comments'

const articles = new ArticleStore
const comment = new CommentStore

export {articles, comment}