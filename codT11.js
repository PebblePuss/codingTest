const solution = ( num ) => {
    let result = [];

    for(let i = 2; i <= num; i++) {
        for(let j = 2; j < i; j++) {
            if( i % j === 0 ) {
                result.push(i);
                break;
            }
        }
    }

    return result.length;
}

console.log(solution(10));