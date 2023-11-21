/* eslint-disable no-console */

import readlineSync from 'readline-sync';

function gameEvenOrNo(name) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const times = 3;
    for (let i = 0; i < times; i += 1) {
        const randomNum = Math.round(Math.random() * 100);
        console.log(`Question: ${randomNum}`);
        const answer = readlineSync.question('Your answer: ');
        const correct = (randomNum % 2 === 0) ? 'yes' : 'no';
        if (answer === correct) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default gameEvenOrNo;
