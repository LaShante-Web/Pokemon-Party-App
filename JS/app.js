
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

var colors = require('colors');
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});





// const select = document.getElementById('characters');
// const card = document.querySelector('.card'); 
// const form = document.querySelector('form');


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(response => response.json())
//   .then(data => console.log(data.message))