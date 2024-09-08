// আমার কাছে একটা array তে কিছু নাম্বার আছে, আমাকে বের করতে হবে সবচেয়ে বড় নাম্বার কোনটা ।

// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
// console.log(Math.max(...numbers))

/*
let biggest number = 2
biggest = 4;
biggest = 21;
biggest = 21;
biggest = 21;
biggest = 23;
biggest = 23;
biggest = 23;
*/

// let biggest = numbers[0];
// console.log("before loop: ",biggest)
// for (let i = 1; i < numbers.length; i++) {
//     console.log("current number:",numbers[i], "biggest number: ",biggest)
//     if (numbers[i] > biggest) {
//         biggest = numbers[i]
//     }
//     console.log("current biggest: ",biggest)
// }

// console.log("after loop: ",biggest)


function giveBiggestNumber(array) {

    if(!Array.isArray(array)){
         return "this is not an array...!";
    }
    let biggest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
        }
    }
    return biggest;
}
// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
const numbers = [30,54,400,24]
// const numbers = true
const result = giveBiggestNumber(numbers)
console.log(result)

