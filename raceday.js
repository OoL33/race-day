let raceNumber = Math.floor(Math.random() * 1000);

//let adultRunner = over 18;
//let youthRunner = under 18;

let registeredEarly = (true);
let age = 10;

if (registeredEarly && age >= 18) {
  raceNumber += 1000;
}

if (age < 18){
  console.log(`${raceNumber} will race at 9:30.`);
} else if (age < 18 && !registeredEarly){
  console.log(`${raceNumber} will race at 11:00.`);
}

if (age > 18) {
  console.log(`${raceNumber} will race at 12:30 pm.`);
} else if(age === 18){
  console.log('Go see the registration desk.');
}