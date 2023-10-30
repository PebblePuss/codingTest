const solution = (start, end, searchNum) => {
    let result = 0;
    const pattern = new RegExp(searchNum);

    for(let i = start; i <= end; i++) {
        if(pattern.test(i.toString())) {
            result += i.toString().match(new RegExp(searchNum, 'g')).length;
            console.log(i);
        }
    }

    return result;
}

console.log(solution(1, 13, 1));