const solution = ( str ) => {
    return Array.from(str.toLowerCase()).sort().join("");
}

console.log(solution("heLLo"));