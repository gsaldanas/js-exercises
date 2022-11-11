function Player(name, rating) {
  this.name = name;
  this.rating = rating;
  //Player.list.push();
}
//Player.list = [];

//display the player
Player.prototype.displayPlayer = function () {
  console.log(this.name + " Rating: " + this.rating);
};

export default Player;
