function searchBinary(arr, target, key) {
    let mid
    let value = (i) =>  key ? arr[i][key] : arr[i]
    for(let left = 0, right = arr.length -1; left <= right;) {
        mid = Math.round((right-left)/2) + left
        if (target === value(mid)) {
            return mid
        } else if(target < value(mid)) {
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }
    return false
}
