// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
// arr 需要处理的数组
// size 数组块长度

export default function (arr, size) {

    if (Array.isArray(arr) && arr.length >= size) {
        let newArray = [] // 待返回的二维数组

        const chunkNum = Math.floor(arr.length / size) // 分片数量

        for (let i = 0; i < chunkNum; i++) {
            let curentIndex = i * size // 当前分片开始位置
            let chunkArr = arr.slice(curentIndex, curentIndex + size)
            newArray.push(chunkArr)
        }
        return newArray

    } else {
        return [arr]
    }

}