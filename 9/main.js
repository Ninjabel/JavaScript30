const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
const p = document.querySelector('p');


function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'poop');

// Styled
console.log('%c I am some great text', 'font-size: 20px; background-color: green;');

// warning!
console.warn('Ohhh noooo!');

// Error :|
console.error('SHIT!');

// Info
console.info('A group of flamingos is called a flamboyance.');

// Testing
console.assert(1 == 2, 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old!`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old!`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Me');
console.count('Me');
console.count('Me');
console.count('Me');
console.count('You');
console.count('You');
console.count('You');
console.count('You');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table
console.table(dogs);