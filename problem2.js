
// amar name mehedy, amar basa rajshahi

// function showInfo(info) {

//     if (typeof info !== "object") {
//         return "please provide a valid object..!";
//     }

//     const result = "amar naam " + info.name + ", amar basa " + info.address;
//     return result;
// }

// const person = {
//     name: "mehedy",
//     address: "Rajshahi"
// }
// const x = showInfo(person)
// console.log(x)

const person = {
    name: "hasan",
    address: "dhaka"
}


// output: mehedy@rajshahi.com

function createEmail(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    const result = info.name + "@" + info.address + ".com";
    return result
}

console.log(createEmail(person))


