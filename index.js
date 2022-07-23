/*
Gets
document.querySelector('li.item'); (list and class item) or (li a) list then a
if you querySelectorAll you would return a list.
document.getElementsByTagName ();
document.getElementsByClassName('className');
document.getElementById('');
*/

//document.getElementById('title').style.color ="blue";
//document.getElementById('barbBtn').style.backgroundColor ="red";
var playerN = prompt("Whats is your name?");
var diceType = 4;
var amount = 1;
var result = 0;
var charCl = "";
var charImg = "";
var charPowers = {blue:0,green:0,red:0,yellow:0};
var charGems = {blue:0,green:0,red:0,yellow:0};
var player = 0;
//var player1 = {class: "",image: "",powers:[0,0,0,0],gems:[0,0,0,0]};
var player1 = {class: "",image: "",powers:charPowers,gems:charGems};
var players = 3;
const topCl = document.getElementById("topClass");
//var charC = ["class", "image", "powerClass", "gems"];
//var designToggle = "none";
//document.getElementById("designMode").style.display = "boxed";
$("#playerName").text(playerN);
$("#barbBtn").click (setBarb);
$("#druidBtn").click (setDruid);
$("#thiefBtn").click (setThief);
$("#engBtn").click (setEng);
$(document).keydown(function (e){if(e.key == "d"){$("#designMode").fadeToggle(400);}});
//document.addEventListener("keypress", function(event) {toggleDesign(event.key);}
//document.getElementById("charClass").innerHTML = charStats[0];
//$("h1").click(function(){$("h1").css("color","green");});

function setBarb() {
  charStats = ("Barbarian");
  var charStats1 =
  {class: "Barbarian",
  image: "charImg",
  powers: [0,0,+1,0],
  gems: [0,0,+1,0]};
  topCl.style.display = "none";
  console.log(charStats1);
  player1 = charStats1;
  updateStats();
}

function setDruid() {
  var charStats1 =
  {class: "Druid",
  image: "charImg",
  powers: [0,+1,0,0],
  gems: [0,+1,0,0]};
  topCl.style.display = "none";
  player1 = charStats1;
  updateStats();
}
function setThief() {
  var charStats1 =
  {class: "Thief",
  image: "charImg",
  powers: [+1,0,0,0],
  gems: [+1,0,0,0]};
  player1 = charStats1;
  updateStats();
  topCl.style.display = "none";
}

function setEng() {
  var charStats1 =
  {class: "Engineer",
  image: "charImg",
  powers: [0,0,0,+1],
  gems: [0,0,0,+1]};
  player1 = charStats1;
  updateStats();
  //$("#charClass").text(player1.class);
  topCl.style.display = "none";
}
console.log(player1);

function updateStats(){
$(".blueGemsCount").text(player1.gems[0]);
$(".greenGemsCount").text(player1.gems[1]);
$(".redGemsCount").text(player1.gems[2]);
$(".yellowGemsCount").text(player1.gems[3]);
$("#charClass").text(player1.class);
}

// Design rolls to be rolled one at a time, even if multiple rolls can occur

function diceRoll(amount, diceType, result) {
  for (let index = 0; index < amount; index++) {

    let random = Math.random();
    //var specialHit = "";
    random = (Math.floor(random) * diceType) + 1;
    return result = random;
    }

    /*if (specialDice = true) {
      var random2 = Math.random();
      random2 = random2 * 10;
      random2 = Math.floor(random2) + 1;

      if (random2 == 10) {
        specialHit = "    Special Hit!!";
      }
    } else {
      specialHit = "";
    }


    alert("Dice " + (index + 1) + ": " + random + specialHit);
    specialhit = "";
  }

}

var amount = prompt("How many dice would you like to roll?");
var diceType = prompt("How many sides on those dice?");
var specialDice = confirm("Would you like to use special dice modifiers?");
diceRoll(amount, diceType);

function diceRoll(amount, diceType)
{
    for (let index = 0; index < amount; index++)
    {

        var random = Math.random();
        var specialHit ="";
        random = random * diceType;
        random = Math.floor(random) + 1;

             if (specialDice = true)
             {
                 var random2 = Math.random();
                 random2 = random2 * 10;
                 random2 = Math.floor(random2) +1;

                 if (random2 == 10)
                 {
                     specialHit = "    Special Hit!!";
                 }
             }
                 else { specialHit = ""; }


        alert("Dice " + (index + 1) + ": " + random + specialHit );
        specialhit = "";
    }

}

/*
function toggleDesign(key){
  if (key == "d") {
  document.getElementById("designMode").style.display = 'block';
}

function handleClick(){

}
*/
