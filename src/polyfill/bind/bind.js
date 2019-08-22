// bind函数实现

var bind = function (content) {
    var that = this
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return that.apply(content, args)
    }
}

export default bind