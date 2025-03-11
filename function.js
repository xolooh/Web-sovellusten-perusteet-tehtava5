var die = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
function displayDiceImage(number) {
  var imagePath = `./img/${number}.png`;
  var diceImageElement = document.getElementById('diceImage');
  diceImageElement.src = imagePath;
}
var diceElement = document.getElementById('dice');
diceElement.onclick = function() {
  var result = die.roll();
  displayDiceImage(result);
};