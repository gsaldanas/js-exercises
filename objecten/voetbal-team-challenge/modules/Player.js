function Player(name, rating, age) {
  this.name = name;
  this.rating = rating;
  this.age = age;
  this.goals = [];
  //Player.list.push();
}
//Player.list = [];

//display the player
Player.prototype.displayPlayer = function () {
  console.log(
    "Name: " + this.name + " Age: " + this.age + " Rating: " + this.rating
  );
};
Player.prototype.addGame = function (game) {
  this.goals.push(game);
};
Player.prototype.displayPlayerStats = function () {
  if (this.goals.length === 0) {
    return "No metrics available";
  }
  //for loop
  // for (let i = 0; i < this.goals.length; i++) {
  //   console.log(`
  //     Game:${this.goals[i].teams},
  //     Datum:${this.goals[i].datum},
  //     Goals:${this.goals[i].goals}
  //   `);
  // }

  //for each
  this.goals.forEach((element) => {
    console.log(`
    Game: ${element.teams},
    Datum: ${element.datum},
    Goals: ${element.goals}
    `);
  });
};
export default Player;
