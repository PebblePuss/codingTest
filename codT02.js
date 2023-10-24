const solution = ( arr ) => {
    let bigNum = Math.max(...arr);
    let index = arr.indexOf(bigNum);

    return [ bigNum, index ];
}

console.log(solution([9, 10, 11, 8]));