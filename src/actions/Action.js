import Dispatcher from '../dispatcher'

export class Action {
    constructor(type, data) {
        this.type = type
        this.data = data
    }
}

export const asyncAC = (type, promise) => {
    return () => {
        Dispatcher.dispatch(new Action(type + '_START'))

        promise.then(
            (response) => Dispatcher.dispatch(new Action(type + '_SUCCESS', {response})),
            (error) => Dispatcher.dispatch(new Action(type + '_FAIL', {error}))
        )
    }
}