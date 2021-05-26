function maxNumber() {

    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(maxNumber(-21, -12, 3, 6, 89, 100));
