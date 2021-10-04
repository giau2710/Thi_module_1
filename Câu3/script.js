function numberCount(arr) {
    let count = 0;
    let checkarr = ["a", "b", "c"]
    let arr = ["a", "o", "e", "u", "i"];
    for (let i = 0; checkarr.length; i++) {
        for (let j = 0; arr.length; j++) {
            if (checkarr[i] == checkarr[j]) {
                count += count + 1
            }
        } 
        if (count == 0) {
            document.write('false')
        }
    }

}