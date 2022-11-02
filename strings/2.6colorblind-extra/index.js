function myColorBlind(txt) {
  return txt
    .replaceAll("blue", "Red")
    .replaceAll("yellow", "Green")
    .replaceAll("red", "blue")
    .replaceAll("green", "yellow")
    .replaceAll("Red", "red")
    .replaceAll("Green", "green");
}

console.log(
  "roses are red, violets are blue, strawberries are red and we always yellow define variables with green let"
);
console.log(
  myColorBlind(
    "roses are red, violets are blue, strawberries are red and we always yellow define variables with green let"
  )
);
