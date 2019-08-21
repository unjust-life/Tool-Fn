export default function (fn, delay) {
    let timer = null
    // eslint-disable-next-line no-unused-vars
    let remaining = 0
    let previous = new Date()

    return function () {
        let now = new Date(),
            remaining = now - previous,
            args = arguments,
            context = this

        if (remaining >= delay) {
            if (timer) clearTimeout(timer)

            fn.apply(context, args)
            previous = now
        } else {
            if (!timer) {
                timer = setTimeout(function () {
                    fn.apply(context, args)
                    previous = new Date()
                }, delay - remaining)
            }
        }
    }
}