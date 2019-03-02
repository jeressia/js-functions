// console.log('hi');

// //Jeressia Williamson
// //Beyonce Knowles-Carter
// //Tori Kelly
// //Sam Smith
// //Jane Doe

const firstName='Jeressia'
const lastName='Williamson'

// console.log(`${firstName} ${lastName}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Jeressia','Williamson');
namePrinter('Beyonce','Knowles-Carter');
namePrinter('Tori','Kelly');
namePrinter('Sam','Smith')
namePrinter('Jane','Doe')

const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('monkey'));

const dogSentence = (dogBreed) => {
    return `My favorite dog breed is ${dogBreed}.`;
}
 console.log (dogSentence('poodle'));
