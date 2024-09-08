const person1 = {
    name: "abul kashem",
    honors: 10,
    hsc: 30,
    isFFfamily: true
}
const person2 = {
    name: "mokber mia",
    honors: 25,
    hsc: 32,
    isFFfamily: false
}

function jobSelection(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    let total_marks = info.honors + info.hsc;
    if (info.isFFfamily) {
        total_marks = total_marks + (total_marks * 0.2)
    }
    console.log(total_marks)
    if (info.isFFfamily && total_marks >= 80) {
        return "Aho vatija aho... chakri to tomari...!"
    } else if (info.isFFfamily && total_marks < 80) {
        return "bad luck vatija.. next time...!";
    } else if (!info.isFFfamily && total_marks >= 80) {
        return "you got the job... "
    } else if (!info.isFFfamily && total_marks < 80) {
        return "Rajakaar rajakaar...!"
    }


  
     
}

console.log(jobSelection(person2))