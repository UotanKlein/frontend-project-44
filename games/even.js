export default function gameEvenOrNo() {
  const randomNum = Math.round(Math.random() * 100);
  const correct = (randomNum % 2 === 0) ? 'yes' : 'no';

  return [randomNum, correct];
}
