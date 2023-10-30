const solution = (arr, target) => {
    let closest = null;
    let minDifference = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const difference = Math.abs(target - arr[i]);

        if (difference < minDifference || (difference === minDifference && arr[i] < closest)) {
            closest = arr[i];
            minDifference = difference;
        }
    }

    return closest;
}

console.log(solution([3, 12, 28], 20))