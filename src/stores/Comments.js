import AbstractStore from './AbstractStore'
import Dispatcher from '../dispatcher'

class CommentStore extends AbstractStore {
    constructor() {
        super()
        this.dispatchToken = Dispatcher.register((action) => {
        })
    }
}

export default CommentStore