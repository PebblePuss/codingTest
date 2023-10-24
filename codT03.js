const solution = ( str, index1, index2 ) => {
    const arr = Array.from(str);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr.join('');
}

console.log(solution("hello", 1, 2));