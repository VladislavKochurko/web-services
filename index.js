const arr = [3, 9, 4 ,2, 16];

function getMaxPerfectSetLength(arr) {
    let results = [];
    const map = new Map();
    arr.forEach(elem => {
        map.set(elem, elem ** 2);
    })
    for (let i = 0; i < arr.length; i++) {
        const solution = [arr[i]];
        let square = arr[i] ** 2;
        while (map.has(square)) {
            solution.push(square);
            square = square ** 2;
        }
        if (solution.length > 1 && solution.length > results.length ) {
            results = solution;
        }
    }

    if (results.length < 2) {
        return -1;
    }
    return results.length;
}

const a = getMaxPerfectSetLength(arr);
console.log(a)
