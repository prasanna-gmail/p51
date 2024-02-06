var cx = 10
var cy = 10
function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  background(220);
  ellipse(cx, cy, 100, 80)
  cx = cx + 1;
  cy = cy + 1;
}
