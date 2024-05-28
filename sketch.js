let cor
function setup() {  createCanvas(400, 400);

  background("white")
}

function draw() {
  stroke("blue");
  cor = color(random(0,255),random(0,255),random(0,255))
  fill(cor);
  
  
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 20, 35);
  }
  
}
