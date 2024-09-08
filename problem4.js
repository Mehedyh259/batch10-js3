// একটা array এর ভেতরে কয়টা boolean ভ্যালু আছে তার কাউন্ট করে দেখানো


const x = [3, false, 2, true, "hello", false, 34, { name: "mehedy" }]

function countBoolean(array) {
    if (!Array.isArray(array)) {
        return "please provide valid array"
    }

    let count = 0;

    for (let item of array) {
        if (typeof item === "boolean") {
            count++
        }
    }
    return count;

}

const result = countBoolean(x)
console.log(result)