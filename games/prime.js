function isPrimeNumber(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    let i = 2;
    while (i < num) {
        if (num % i === 0 && num !== i) {
            return false;
        }
        i += 1;
    }
    return true;
}

export default function gameIsPrime() {
    const num = Math.round(Math.random() * 1000);

    const correct = isPrimeNumber(num) ? 'yes' : 'no';

    return [num, correct];
}
