const solution = (emergency) => {
    let result = new Map();

    emergency.forEach((value, index) => {
        result.set(value, {
            valIndex: index,
            sortIndex: -1, // 초기값 설정
        });
    });

    let sortResult = [...emergency].sort((a, b) => b - a);

    emergency.forEach((value) => {
        const item = result.get(value);
        if (item) {
            item.sortIndex = sortResult.indexOf(value) + 1;
        }
    });

    return [...result.values()].map((item) => item.sortIndex);
}

console.log(solution([30, 10, 23, 6, 100]));
