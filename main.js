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
    return `Processed ${animal}`;
};

console.log(nuggetizer('monkey'))

const dogBreed=(dogBreed) => {
    return `My favorite dog breed is ${dogBreed}`
}

const dogBreedDiv = document.getElementById('dog-breeds');

// console.log('dogBreedDiv', dogBreedDiv)
// dogBreedDiv.innerHTML = dogBreed('lab');

// const nuggetizerDiv = document.getElementById('nuggetizer');

// console.log('nuggetizerDiv', nuggetizerDiv)
// nuggetizerDiv.innerHTML= nuggetizer('Salmon');
// nuggetizerDiv.innerHTML += nuggetizer('mouse')

const printToDom = (divId, textToPrint) => {
    const selectedDiv= document.getElementById(divId)
    selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('bear'));
printToDom('dog-breeds', dogBreed('kitten'));
printToDom('nuggetizer',nuggetizer('kitten'));
printToDom('nuggetizer','mmmmmmmmmm');

let bandNumber = 1;

const addBand = (bandName) => {
    //do stuff
    const bandText=`<h5>${bandNumber}. ${bandName}</h5>`
    bandNumber += 1;
printToDom ('bandlist',bandText);
}

addBand('Metallica');
addBand('KISS');
addBand('Destinys Child');
