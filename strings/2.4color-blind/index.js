const text =
  "roses are blue, violets are red, grass is yellow, don't be so mean.";
console.log(text);
const result = text.replace("blue", "red").replace("yellow", "green");
console.log(result);

function myColorBlind(txt) {
  return txt.replaceAll("blue", "red").replaceAll("yellow", "green");
}

console.log(
  myColorBlind("i'm blue and yellow and the grass is so green with blue sky")
);
