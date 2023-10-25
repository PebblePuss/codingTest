const solution = (nums, direc) => {
    let func = {
        "right": (arr) => {
            let tmp = arr[arr.length - 1];

            for (let i = arr.length - 1; i >= 0; i--) {
                if (i === 0) {
                    arr[i] = tmp;
                } else {
                    arr[i] = arr[i - 1];
                }
            }

            return arr;
        },
        "left": (arr) => {
            let tmp = arr[0];

            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    arr[i] = tmp;
                } else {
                    arr[i] = arr[i + 1];
                }
            }

            return arr;
        }
    }

    return func[direc](nums);
}

console.log(solution([1, 2, 3], "right"));