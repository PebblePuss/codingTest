const solution = ( age ) => {
    const data = "abcdefghij";
    const mapping = Array.from(age.toString()).map(digit => data[digit]).join("");

    return mapping;
}

console.log(solution(21));