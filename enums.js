var ab = function () {
  return 10;
};
var Color;
(function (Color) {
  Color[(Color["Red"] = 10)] = "Red";
  Color["Orange"] = "123";
  Color[(Color["Yellow"] = 0)] = "Yellow";
  Color["Blue"] = "10";
})(Color || (Color = {}));
console.log(Color);
var test = function (color) {
  switch (color) {
    case Color.Blue:
      console.log(Color.Blue);
      break;
    case Color.Orange:
      console.log(Color.Orange);
      break;
    case Color.Red:
      console.log(Color.Red);
      break;
    case Color.Yellow:
      console.log(Color.Yellow);
      break;
    default:
      console.log("default");
  }
};
test(Color.Blue); // "10"을 넣으려고 하면 에러가 난다. "10" !== Color.Blue이다.
