function getVowels(str) {
    let vowels = "aeiou";
    let vowelsArr = [];

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            if (vowelsArr.indexOf(str[i]) == -1) {
                vowelsArr.push(str[i]);
            }
        }

    }

    let strVowels = vowelsArr.join();
    console.log("Vowels: " + strVowels);
}

console.log(getVowels("umuzi"));
