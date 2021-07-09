// window.alert("This is an alert! Javascript is running!");
// this creates a function named "fight"
// var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
// window.alert(playerName);
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
// console.log(10+10);
// what is this?
// console.log("Our robot's name is " + playerName);
// function fight() {
// window.alert("The fight has begun!");
// }
// fight();

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
//if (playerHealth > 0) {
    //console.log("Your player is still alive!");
// }
// else {
  //  console.log("Your player is dead!");
// }
var playerAttack = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
     // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player chose to fight, then fight 
if (promptfight === "fight" || promptfight === "FIGHT") {
 
  


// remove enemy's health by subtracting the amount set in the playerAttack variable 
   enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
   console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

  // check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
   console.log(enemyName + " attacked " + playerName + ". " +  playerName + " now has " + playerHealth + " health remaining.");
   // check player's health
 if (playerHealth <= 0) {
    window.alert(playerName + " has died!")
 }
 else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
 }
   // if player choses to skip
} else if (promptfight === "skip" || promptfight === "SKIP") {
    window.alert(playerName + " has choosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}


};
  fight();