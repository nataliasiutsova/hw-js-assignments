class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }
  oneClick() {
    console.log(this.width, this.height, this.type, this.color);
  }
}
let greenButton = new Button(10, 5, 'button', 'green');
console.log(greenButton);
greenButton.oneClick();
console.log(greenButton instanceof Button);

function testButton() {
  if (
    greenButton.width == 10 &&
    greenButton.height == 5 &&
    greenButton.type == 'button' &&
    greenButton.color == 'green'
  ) {
    console.log('Instance properties match the specified properties');
  } else {
    console.log('Instance properties do not match the specified properties');
  }
}
testButton();
