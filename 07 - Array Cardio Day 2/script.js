// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

function currentAge(yearOfBirth) {
    const currentYear = (new Date()).getFullYear();
    return currentYear - yearOfBirth;
}
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const result = people.some(person => currentAge(person.year) >= 19);
console.log(result);
// Array.prototype.every() // is everyone 19 or older?
const result2 = people.every(person => currentAge(person.year) >= 19);
console.log(result2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const result3 = comments.find(comment => comment.id === 823423);
console.log(result3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log(comments);
const index = comments.findIndex(comment => comment.id === 823423);

const updatedComments = [
    ...comments.splice(0, index),
    ...comments.splice(index +1)
];
console.table(updatedComments);