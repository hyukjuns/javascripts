const age = parseInt(prompt("input your age"));

if (isNaN(age)) {
    console.log("please write a number");
} else if (age < 10) {
    console.log("Too Young");
} else {
    console.log("here beer");
}