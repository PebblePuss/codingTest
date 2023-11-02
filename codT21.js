const solution = ( str ) => {
    let resultObj = {};

    for(value of str) {
        if (resultObj[value] !== false) {
            resultObj[value] = !resultObj[value];
        }
    }

    let result = Object.keys(resultObj).filter((key) => resultObj[key] === true);
    return result.sort().join("");
}

console.log(solution("abcabcadc"));