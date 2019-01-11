// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {

//     const arr = str.split('');

//     arr.reverse();

//     return arr.join('');
// }

function reverse(str) {

    let reversed = '';

    for(let ch of str){
        reversed = ch + reversed;
    }

    return reversed;
}


// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, character) =>  character + reversed, '')
// }


module.exports = reverse;
