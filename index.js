import { say as cowsay } from 'cowsay';

console.log(
  cowsay({
    text: process.argv?.at(2) || 'diga algo!',
  })
);
