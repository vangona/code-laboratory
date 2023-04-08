const ab = () => {
  return 10;
};

enum Color {
  Red = 10,
  Orange = "123",
  Yellow = ab(),
  Blue = "10",
}

const test = (color: Color) => {
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
