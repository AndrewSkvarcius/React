import fruits from './foods';
import {Choice, Remove} from './helper';

let fruit = Choice(fruits);

console.log(`I'd like a random ${fruit} please`);

console.log(`Here you go ${fruit}`);

console.log(`Delicious May I have another?`);

let leftover = Remove(fruit, fruits);

console.log(`I'm sorry we're out, We have ${leftover.length} left`)
