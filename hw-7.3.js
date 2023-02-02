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

function testButton(button) {
  if (
    button.width == 10 &&
    button.height == 5 &&
    button.type == 'button' &&
    button.color == 'green'
  )
    console.log('succes');
  else {
    console.log('error');
  }
}
testButton(greenButton);
