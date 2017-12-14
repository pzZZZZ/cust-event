/*
 * @Author: pzzz 
 * @Date: 2017-12-13 14:18:22 
 * @Last Modified by: pzzz
 * @Last Modified time: 2017-12-13 15:42:55
 */

class CustomEvent {
    constructor() {
        this._events = {}
    }
    on(type, fn, scope) {
        if (type + '' !== type) {
            console.error('The first argument type is requird as string! ')
            return this
        }
        if (typeof fn != 'function') {
            console.error('The second argument type is requird as function! ')
            return this
        }
        type = type.toLowerCase()
        if (!this._events[type]) {
            this._events[type] = []
        }
        this._events[type].push(scope ? { fn: fn, scope: scope } : { fn: fn });
        return this
    }
    trigger(type, data) {
        type = type.toLowerCase()
        let events = this._events[type];
        let fn;
        let event = Object.assign({ type: type, origin: this, cancle: false }, data);
        if (!events) {
            return event
        }
        for (let i = 0; i < events.length; ++i) {
            fn = events[i].fn;
            event.scope = events[i].scope || this;
            fn.call(event.scope, event)
        }
        return event
    }
    off(type, fn) {
        type = type.toLowerCase()
        let events = this._events[type]
        if (!events || !events.length) {
            return this
        }
        if (!fn) {
            this._events[type] = events = []
        } else {
            for (let i = 0; i < events.length; ++i) {
                if (fn === events[i].fn) {
                    events.splice(i, 1)
                    --i;
                }
            }
        }
        return this
    }
    one(type, fn, scope) {
        let _this = this;
        let nfn = function () {
            _this.off(type,nfn)
            fn.apply(scope || _this, arguments)
        }
        this.on(type, nfn, scope)
        return this
    }
}

let cust = new CustomEvent()
export default cust
module.exports = cust
