const solution = (nums, n) => {
    let result = [];

    for (let i = 0; i < nums.length; i += n) {
        let chunk = nums.slice(i, i + n);
        result.push(chunk);
    }

    return result;
}

console.log(solution( [1,2,3,4,5,6,7,8], 2));