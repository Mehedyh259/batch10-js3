// সমকোনী ত্রিভুজের বড় বাহুর উপর আকানো বর্গ খেত্রের খেত্রফল অপর দুই বাহুর উপর আকানো বর্গ খেত্রের খেত্রেফলের সমান, প্রমান

// abc triangle ...    ac^2 = ab^2 + bc^2

function somokoniTest(ac,ab,bc){

    if(typeof ac !== "number" || typeof ab !== "number" || typeof bc !== "number" ){
        return "invalid input"
    }
    
    const biggestSquare = ac**2;
    const smallSquare1 = ab**2;
    const smallSquare2 = bc**2;

    if(biggestSquare === (smallSquare1 + smallSquare2)){
        return "somokoni triangle...!"
    }else {
        return "not somokoni triangle...!"
    }
}

const result = somokoniTest(5,3,4)
console.log(result)