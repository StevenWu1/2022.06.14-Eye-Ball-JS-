function setup() {
  createCanvas(600, 600);
  background("pink");
  frameRate(2);
}

let eyex = 300;
let eyey = 300;
let d = 200;
let irisColor = color(255, 0, 0);
let irisColor1 = color(255, 0, 0);
let irisColor2 = color(255, 0, 0);


function eyeball(eyex, eyey, d, irisColor) {
  fill("white");
  circle(eyex, eyey, d);
  fill(irisColor);
  circle(eyex, eyey, d / 2);
  fill("black");
  circle(eyex, eyey, 2.5*d/8);
}

function draw() {
  background("white");
  let eyex = random(50, width-100);
  let eyey = random(50, height-100);
  let d = random(100, 300);
  let irisColor = color(random(1, 255), random(1, 255), random(1,255));
  let irisColor1 = color(random(1, 255), random(1, 255), random(1,255));
  let irisColor2 = color(random(1, 255), random(1, 255), random(1,255));
  eyeball(eyex, eyey, d, irisColor);
  eyeball(eyex + d, eyey, d, irisColor1);
  eyeball(eyex + d/2, eyey + d/2, d/2, irisColor2);
}
