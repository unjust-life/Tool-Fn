export default function (fn, delay) {
    let timer = null

    return function () {
        let args = arguments
        let context = this

        if (timer) {
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
}