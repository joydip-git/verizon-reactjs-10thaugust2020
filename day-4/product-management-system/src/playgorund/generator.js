const numbers = [1, 2, 3, 4];

function* test() {
  for (let index = 0; index < numbers.length; index++) {
    yield numbers[index];
  }
}
const iterator = test();
console.log(iterator);
console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
console.log(iterator.return());
console.log(iterator);
console.log(iterator.next());
