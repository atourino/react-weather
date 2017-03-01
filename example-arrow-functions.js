// var names = ['Andrew', 'Antonio', 'Jose'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Antonio'));

// var person = {
//   name: 'Antonio',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addStatement(0, 9));

console.log(addExpression(1, 3));
console.log(addExpression(0, 9));