function calculateArea(side1, side2, side3) {
    let semip = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semip * ((semip - side1) * (semip - side2) * (semip - side3)));

    return area;

}

console.log(calculateArea(7, 5, 6));
