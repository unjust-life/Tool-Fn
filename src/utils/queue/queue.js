// 队列  按先进先出顺序执行数组中的每个函数 可通过设置数字来决定两个函数执行的间隔时间
export default function (actions) {
    let i = 0
    function next() {
        let f = actions[i]
        if(typeof(f) === 'function') {
            f()
            setTimeout(next, 0)
        } else if(f > 0) {
            setTimeout(next, f)
        }
        i++
    }
    next()
}