const solution = ( str ) => {
    const filteredArr = str.split(" ").reduce((result, word, index, arr) => {
        if (word === "Z" && index > 0 && !isNaN(arr[index - 1])) {
            result.pop();

            return result;
        } else {
            result.push(word);

            return result;
        }
    }, []);

    return filteredArr.reduce((acc, value) => {
        return acc + (isNaN(value) ? 0 : parseInt(value));
    }, 0);
}

console.log(solution("1 2 Z 3"));