var person = {
  firstName: 'Daisy ',
  lastName: 'Yoo',
  hobby: 'cooking',
  job: 'working on it',
  previousJob: 'sous chef'
};
console.log(person);

var fullName = person.firstName + person.lastName;
console.log("The person's full name is:", fullName);

var job = person.job;
console.log("The person's current job is:", job);

var previousJob = person.previousJob;
console.log("The person's previous job is:", previousJob);

console.log('The complete person object:', person);
