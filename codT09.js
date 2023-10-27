const solution = ( num, searchNum ) => {
    let result = Array.from(num.toString());

    for(value of result) {
        if(value === searchNum.toString()) {
            return result.indexOf(value) + 1;
        }
    }

    return -1;
}

console.log(solution(123456, 5));