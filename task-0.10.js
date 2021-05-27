
function commonChar(str1, str2) {
    let common = "";
    let str1LowerCase = str1.toLowerCase();
    let str2LowerCase = str2.toLowerCase();

    for (let i = 0; i < str1LowerCase.length; i++) {
        for (let j = 0; j < str2LowerCase.length; j++) {
            if (str1LowerCase[i].includes(str2LowerCase[j])) {
                common += str2LowerCase[j] + ",";
            }
        }

    }

    console.log("Common letter: " + common);
}

commonChar("HOUSE", "computers");
