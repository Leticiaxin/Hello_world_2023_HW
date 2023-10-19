let bubbles = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(40, 80); // Increased initial size
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(400, 100, 100);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.color = color(random(255), random(255), random(255)); // Random flower color
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.r = random(40, 80); // Change flower size
      this.color = color(random(255), random(255), random(255)); // Change flower color
    }
  }

  move() {
    this.x = this.x + random(0, 1); // Horizontal movement
    this.y = this.y + random(0, 0);   // Vertical movement
  }

  show() {
    noStroke();
    fill(this.color); // Use the random color
    
    // Create a flower-like pattern for the circle
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i;
      let petalX = this.x + cos(angle) * this.r;
      let petalY = this.y + sin(angle) * this.r;
      ellipse(petalX, petalY, this.r * 0.8, this.r * 0.8);
    }
    // Draw the center circle
    fill(255, 150, 150);
    ellipse(this.x, this.y, this.r * 0.7);
  }
