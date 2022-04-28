// function addTwoNumbers(x, y) {
//   return x + y;
// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('John');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);
// console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

var getFullNameResult = getFullName("'Juan ", "Ramirez'");
console.log(getFullNameResult);

// var firstName = "Juan"
// var lastName = firstName.concat('', ' Ramirez');
// console.log(lastName);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log(cubeResult);
// var exponents = Math.pow(2, 3);
// console.log(exponents);
