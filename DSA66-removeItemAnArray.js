// JavaScript Program to Remove Specific Item From an Array

// Method-1
// function removeItemFromArray(array, n) {
//     const newArray = [];

//     for ( let i = 0; i < array.length; i++) {
//         if(array[i] !== n) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

// console.log(result);

// Method-2
function deleteItemFromArray(arr, item) {
    let i;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == item) {
            break;
        }
    }

    if(i == arr.length) {
        return arr;
    }

    for(let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    return (arr.length - 1);
    
}

console.log(deleteItemFromArray([1, 2, 3 , 4 , 5], 4));;