const solution = (str) => {
    const numbers = str.match(/\d+/g);
    let result = 0;

    if(numbers) {
        for(value of numbers) {
            result += parseInt(value);
        }
    } else {
        return 0;
    }

    return result;
}

console.log(solution("aAb1B2cC34oOp"));