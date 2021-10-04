
function checkValue(index, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (index == arr[i]) {
            return "Có"
        }
        return "không"
    }
}
let arr = ["1", "2", "3"];
let index = Number(prompt("nhập"));
document.write(checkValue(index, arr));