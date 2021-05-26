function getVowels(str) {
    let vowels = "aeiou";
    let vowelsArr = [];

    let strLower = str.toLowerCase();

    for (let i = 0; i < strLower.length; i++) {
        if (vowels.indexOf(strLower[i]) !== -1) {
            if (vowelsArr.indexOf(strLower[i]) == -1) {
                vowelsArr.push(strLower[i]);
            }
        }

    }

    let strVowels = vowelsArr.join();
    console.log("Vowels: " + strVowels);
}

console.log(getVowels("UMUZI"));
