// 函数柯里化

export default function () {
    let fns = [...arguments]
    
    return function (initRes) {
        let res = initRes
        for (let i = fns.length - 1; i > -1; i--) {
            res = fns[i](res)
        }
        return res
    }
}