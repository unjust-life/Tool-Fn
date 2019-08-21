// 深拷贝一个对象或数组  返回值是拷贝后的结果

export default function (data) {

    if (typeof data === 'object') {
        data = JSON.parse(JSON.stringify(data))
    } else {
        return data
    }

}
