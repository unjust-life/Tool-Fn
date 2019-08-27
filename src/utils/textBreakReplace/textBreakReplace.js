//把换行符换成\\n 能够通过json正确的传递给后端
export default function (content) {
    let string = content
    string = string.replace(/\r\n/g, "\\n")
    string = string.replace(/\n/g, "\\n")
    return string
}
