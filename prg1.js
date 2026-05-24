const age = 32;
if (age < 18) {
  console.log("not approved");
} else if (age >= 18 && age < 60) {
  console.log("approved");
} else if (age >= 60) {
  console.log("senior approved");
} else {
  console.log("you are dead");
}
