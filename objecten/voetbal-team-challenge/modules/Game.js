function Game(teams, datum, goals = 0) {
  this.teams = teams;
  this.datum = datum;
  this.goals = goals;
}

Game.prototype.displayGame = function () {
  console.log(
    "Teams: myTeam vs " +
      this.teams +
      " Date: " +
      this.datum +
      " Goals: " +
      this.goals
  );
  if (this.goals >= 3) {
    console.log("Hattrick scored");
  }
};
export default Game;
