const reverseString = function(phrase) {
    let result = phrase.split("");
    result = result.reverse();
    result = result.join("");
    result = result.toString();
    return result
};

//console.log(reverseString("honey"));

// Do not edit below this line
module.exports = reverseString;
