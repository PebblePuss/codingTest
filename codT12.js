const solution = ( str ) => {
    let result = new Set();

    for(value of str) {
        result.add(value);
    }

    return Array.from(result).join("");
}

console.log(solution("people"));