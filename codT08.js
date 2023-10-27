const solution = ( num ) => {
    return Array.from(num.toString()).filter(value => value === "3" || value === "6" || value === "9").length;
}

console.log(solution(29423))