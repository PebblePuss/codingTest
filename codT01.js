const solution = (num, nums) => {
    let result = [];
    for (n of nums) {
        if(n % num === 0) {
            result.push(n);
        }
    }

    return result;
}

console.log(solution(3, [4,5,6,7,8,9,10,11,12]));