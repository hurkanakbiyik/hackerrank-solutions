function miniMaxSum(arr) {
    var newArr = arr.sort();
    var mid = newArr[1] + newArr[2] + newArr[3];
    console.log((mid+newArr[0]) + ' ' + (mid+newArr[4]));
}
