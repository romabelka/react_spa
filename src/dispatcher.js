import {Dispatcher} from 'flux'

class CustomDispatcher extends Dispatcher {
    dispatchAsync() {
        setTimeout(() => Dispatcher.prototype.dispatch.apply(this, arguments), 0)
    }
}

export default new CustomDispatcher