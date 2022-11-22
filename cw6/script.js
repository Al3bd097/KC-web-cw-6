alert("Welcome to my app that will calculate your marks!");
let grade = prompt("Type your mark here");
alert(grade);
console.log(`Your mark is ${grade}`);
if (grade >= 90) {
  console.log("You got an A 🥳");
} else if (grade >= 80) {
  console.log("You got a B 🤩");
} else if (grade >= 70) {
  console.log("You got a C 🙂");
} else if (grade >= 60) {
  console.log("You got a D 😕");
} else if (grade >= 50) {
  console.log("Your mark is very weak ☹️");
} else {
  console.log("Failed 💔");
}
