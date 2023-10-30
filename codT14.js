const solution = (before, after) => {
    let objectB = func(before);
    let objectA = func(after);

    for(key of Object.keys(objectB)) {
        if(objectA[key]) {
            if(objectB[key] !== objectA[key]) {
                return 0;
            }
        } else {
            return 0;
        }
    }

    return 1;
}

const func = ( str ) => {
    let object = {};

    for (text of Array.from(str)) {
        if(object[text]) {
            object[text]++
        } else {
            object[text] = 1;
        }
    }

    return object
}

console.log(solution("olleh", "hello"))