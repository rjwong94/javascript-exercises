const repeatString = function(word,repeat) {
    let i = 0;
    let sentance = word;
    while (i < repeat) {
        sentance.concat(word);
    }

    return sentance;
};

// Do not edit below this line
module.exports = repeatString;
