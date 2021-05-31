function timeString(num) {
    let hours = 0;
    let minutes = 0;
    let finalTime = "";

    let convertToTime = num / 60;
    hours = Math.floor(convertToTime); // this operation removes the decimal part of the value which are minutes
    minutes = Math.floor((convertToTime - hours) * 60) // subtracting hours from the value * 60 produces minutes

    if (hours === 1) {
        finalTime = hours + " hour, ";
    } else {
        finalTime = hours + " hours, ";
    }

    if (minutes === 1) {

        finalTime = finalTime + minutes + " minute";

    } else {

        finalTime = finalTime + minutes + " minutes";

    }

    console.log(finalTime);

}

timeString(0);
