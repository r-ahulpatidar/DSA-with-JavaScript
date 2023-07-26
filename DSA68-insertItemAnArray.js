// JavaScript Program to Insert Item in an Array

function insertElement(arr, n, pos, element) {
    let index = pos - 1;
    for(let i = n-1; i >= index; i--) {
        arr[i+1] = arr[i];
    }

    arr[index] = element;

    return arr;
}

console.log(insertElement([1, 2, 4, 5], 4, 3, 3));