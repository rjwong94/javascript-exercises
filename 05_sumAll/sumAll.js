const sumAll = function(a,b) {
    let greaterNum;
    let lesserNum;
    let sum = 0;
    
    if (a < 0 || b < 0 || Number.isInteger(a) == false || Number.isInteger(b) == false){
        return "ERROR";
    }
    
    else if(a > b){
        greaterNum = a;
        lesserNum = b;
    }
    else {
        greaterNum = b;
        lesserNum = a;
    }

    while (lesserNum <= greaterNum) {
        sum += lesserNum;
        lesserNum++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
