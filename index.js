
function rgb() {
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  r = random(255);
  g = random(255);
  b = random(255);
}




function setup() {
  createCanvas(1920, 1076);
 rgb()
  // translucent stroke using alpha value
  
  
  background(r2,g2,b2);
  frameRate(1);
  }
  
  function draw() {
    rgb()
    // draw two random chords each frame
    randomChord();
    randomChord();
    stroke(r, g, b);
    strokeWeight(10);
  
  }
  
  function randomChord() {
    rgb()
    // find a random point on a circle
    let angle1 = random(0, 2 * PI);
    let xpos1 = 500 + 500 * cos(angle1);
    let ypos1 = 500 + 500 * sin(angle1);
  
    // find another random point on the circle
    let angle2 = random(0, 2 * PI);
    let xpos2 = 500 + 500 * cos(angle2);
    let ypos2 = 500 + 500 * sin(angle2);
  
    // draw a line between them
    line(xpos1, ypos1, xpos2, ypos2);
  }
  setTimeout(function(){
    window.location.href = 'sketch.html';
 }, 20000);