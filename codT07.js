const solution = ( num ) => {
    let piece = 6;
    let result = [];

    for(let i = 1; i <= num * piece; i++) {
        if( i % num === 0 && i % piece === 0 ) {
            result.push(i);
        }
    }

    return result[0] /piece;
}

console.log(solution(4));