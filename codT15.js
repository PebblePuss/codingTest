const solution = ( num ) => {
    let number = 1;
    let count = 0;

    while (number <= num) {
        count++;
        number *= count;
    }

    return num === number ? count : count - 1;
}

console.log(solution(7))