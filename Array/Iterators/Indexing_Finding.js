const numbers = [12, 12, 33, 44, 55, 65];
// const first = numbers[0]
// const second = numbers[1]

//easy way to find is destructuring
const [first, second, third, ...rest] = numbers;
first;
second;
third;
rest;

//const [state, useState] = useState();


const score = [12, 12, 33, 44, 55, 65];
score;
const copyOfNUmbers = [...score];
copyOfNUmbers;
copyOfNUmbers[0] = 100
copyOfNUmbers;
numbers;


const people = [
    {
        name: 'john'
    }, { name: 'june' }];

people;
const copyOfPeople = [...people];
copyOfPeople;
copyOfPeople[0].name = 'Jack'
copyOfPeople;
people;