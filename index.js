/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import getName from './src/cli.js';
import gameEvenOrNo from './src/even.js';
import gameCalculator from './src/calc.js';
import gameFindGCD from './src/gcd.js';

export default function gameBrain(game) {
    console.log('Welcome to the Brain Games!');
    const name = getName();
    const times = 3;
    let func;
    switch (game) {
    case 'even':
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        func = () => gameEvenOrNo();
        break;
    case 'calc':
        console.log('What is the result of the expression?');
        func = () => gameCalculator();
        break;
    case 'gcd':
        console.log('Find the greatest common divisor of given numbers.');
        func = () => gameFindGCD();
    break;
    default:
        return;
    }
    for (let i = 0; i < times; i += 1) {
        const [question, correct] = func();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(correct)) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
