/* eslint-disable no-console */

export default function gameProgression() {
    let first = Math.round(Math.random() * 20);
    const randomValue = Math.round(Math.random() * 10);
    const progression = Math.round(Math.random() * 10);
    let result = '';
    let correct;
    let i = 1;
    while (i <= 10) {
        if (i === randomValue) {
            result = `${result} ..`;
            correct = first;
        } else {
            result = `${result} ${first}`;
        }
        first += progression;
        i += 1;
    }

    return [result, correct];
}
