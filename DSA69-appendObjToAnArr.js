// JavaScript Program to Append an Object to An Array

function insertObject(arr, obj) {

    // method-1
    // append object
    // arr.push(obj);

    // method-2
    // let index = arr.length;
    // appending object to end of array
    // arr.splice(index, 0, object);

    // method-3
    // append object
    arr = [...arr, object];  // Best way
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);