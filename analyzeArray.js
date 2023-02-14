export default function analyzeArray(arrayToBeAnalyzed) {

    if (!Array.isArray(arrayToBeAnalyzed)) {
        throw new TypeError('Array required to be analyzed but an ' + typeof (arrayToBeAnalyzed) + ' passed');
    }

    arrayToBeAnalyzed.forEach(element => {
        if (!Number.isInteger(element)) {
            throw new TypeError('All array elements must be integers but an ' + typeof (element) + 'was given');
        }
    });

    let average = (arrayToBeAnalyzed.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)) / arrayToBeAnalyzed.length;

    let max = 0;

    max = arrayToBeAnalyzed.reduce((accumulator, current) => {
        return accumulator > current ? accumulator : current;
    }, 0);

    let length = arrayToBeAnalyzed.length;

    let analyzedArray = {
        average: average,
        min: 1,
        max: max,
        length: length
    };

    return analyzedArray;
}