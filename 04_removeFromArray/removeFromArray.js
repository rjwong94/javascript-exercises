const removeFromArray = function(array, ...n) {
    let newArray = [];
    array.forEach(element => {
        if (!n.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
