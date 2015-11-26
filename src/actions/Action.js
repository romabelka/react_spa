import Dispatcher from '../dispatcher'

export class Action {
    constructor(type, data) {
        this.type = type
        this.data = data
    }
}

export const loadAC = (type, retrievePropmise) => {
    return () => {
        Dispatcher.dispatch(new Action(type + '_LOADING_START'))

        retrievePropmise
            .then((response) => Dispatcher.dispatch(new Action(type + '_LOADING_SUCCESS', {response})))
            .catch((error) => Dispatcher.dispatch(new Action(type + '_LOADING_FAIL', {error})))
    }
}