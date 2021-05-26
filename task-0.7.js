function celsiusTofahrenheit(num) {
    return (num * 9 / 5) + 32;
}

function fahrenheitToCelsius(num) {
    return (num - 32) * 5 / 9;
}

console.log(celsiusTofahrenheit(18));
console.log(fahrenheitToCelsius(180));
