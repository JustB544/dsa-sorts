function bubbleSort(_arr) {
    let swapped;
    const arr = [..._arr];
    let temp;
    for (let i = 0; i < arr.length; i++){
        swapped = false;
        for (let j = 1; j < arr.length-i; j++){
            if (arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;