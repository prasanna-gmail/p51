let mouthWidth = 40;
let esophagusWidth = 60;
let stomachWidth = 80;
let intestineWidth = 20;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    // Mouth
    fill(255, 0, 0);
    rect(50, 300, mouthWidth, 30);

    // Esophagus
    fill(200, 200, 0);
    rect(90, 300, esophagusWidth, 30);

    // Stomach
    fill(255, 165, 0);
    rect(150, 300, stomachWidth, 40);

    // Intestines
    fill(0, 255, 0);
    rect(240, 300, intestineWidth, 30);
    rect(280, 300, intestineWidth, 30);
    rect(320, 300, intestineWidth, 30);
}

function keyPressed() {
    // Press right arrow key to simulate the food moving through the digestive system
    if (keyCode === RIGHT_ARROW) {
        mouthWidth -= 5;
        esophagusWidth -= 5;
        stomachWidth -= 5;
        intestineWidth -= 5;
    }
}
