const solution = (arr) => {
    const pattern = new RegExp("7", "g");

    return arr.reduce((result, value) => {
        const matches = value.toString().match(pattern);
        return result + (matches ? matches.length : 0);
    }, 0);
}

console.log(solution([7, 77, 17]));