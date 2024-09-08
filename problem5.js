/*
bus = 50;
micro = 15
rickshaw cost 20 taka
borjatri = 234;
bus (4) = 200 , remaining = 34
mircro (2) = 30, remaining = 4
rickshaw (4) = 20 *4 = 80 taka

*/

function rickshawVara(peoples){

    const bus = 50;
    const micro = 15;
    const rickshawCost = 20 


    const remainAfterBus = peoples % bus;
    
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * rickshawCost
}

console.log(rickshawVara(234))