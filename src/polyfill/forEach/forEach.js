


var forEach = function (fn, context) {

    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function")
    }

    for(var i = 0; i < this.length; i++) {
        fn.call(context, this[i], i, this)
    }
}

export default forEach