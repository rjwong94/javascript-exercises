const repeatString = function(word,repeat) {
    let i = 0;
    let sentance = word;
    while (i < repeat) {
        sentance.concat(word);
        i++;
    }

    return sentance;
};

console.log(repeatString("Hey", 3));

// Do not edit below this line
module.exports = repeatString;
