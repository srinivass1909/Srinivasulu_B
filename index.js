

//working with functions 

function myFunction(val1, val2) {
    var result = val1 * val2;
    return result;
}

let res1 = myFunction(10, 23);

console.log(res1)


// default parameaters 



function myFunction(val1, val2 = 1) {
    var result = val1 * val2;
    return result;
}

let res2 = myFunction(10, 23);

console.log(res2)


// arrow Functions

let myFunc = (val) => {
    return val * val + 2;
}

console.log(myFunc(5));


// Set Time-out

setTimeout(() => {
    console.log(12345);
}, 2000) //it will return after 2 min..



// this is the async fuction but it will return a promise 
async function functions() {
    let ans = 12;
    return ans * 2;

}
console.log(functions())

// it will return the value without showing promise
async function myFunctions() {
    let result = await functions();
    console.log(result)

}
myFunctions();