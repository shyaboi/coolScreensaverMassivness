
let num = 200;
let range = 99;

let ax = [];
let ay = [];
function rgb() {
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  r = random(255);
  g = random(255);
  b = random(255);
}
// setInterval(() => {
//   rgb()
//   }, 2000);
  


function setup() {
  createCanvas(1920, 1075);
 rgb()
  
  
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
    
    // translucent stroke using alpha value
  }
  frameRate(15);
}


function draw() {

  background(r2,g2,b2);
    strokeWeight(25);

  // Shift all elements 1 place to the left
  for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( let j = 1; j < num; j++ ) {
      
      let val = j/num * 2040.0 + 511;
      rgb()
    stroke(val);
    stroke(r, g, b);
    
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    

  
  
  
 

  
  }
}

setTimeout(function(){
  window.location.href = 'snow.html';
},200000);