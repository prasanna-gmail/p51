let track1; // loop
let track2; // loop
let vehicle;
let speed = 1.5; // vehicle speed
let startX = 0; // initial position.x
let startY = 0; // initial position.y
let sizeX = 20; // ellipse size.x
let sizeY = 20; // ellipse size.y
let t = 0;

function setup() {
    createCanvas(400, 400);

    track1 = [
        createVector(width / 2, height / 2),
        createVector(0, height / 2 - 160),
        createVector(0, height / 2 + 160),
        createVector(width / 2, height / 2),
    ]

    track2 = [
        createVector(width / 2, height / 2),
        createVector(width, height / 2 - 160),
        createVector(width, height / 2 + 160),
        createVector(width / 2, height / 2),
    ]

    vehicle = new Vehicle(startX, startY, sizeX, sizeY, speed, t, true);
}

function draw() {
    background(119, 221, 119);

    // infinite loop creation
    stroke(255);
    strokeWeight(5);
    noFill();
    bezier(track1[0].x, track1[0].y, track1[1].x, track1[1].y, track1[2].x, track1[2].y, track1[3].x, track1[3].y);
    bezier(track2[0].x, track2[0].y, track2[1].x, track2[1].y, track2[2].x, track2[2].y, track2[3].x, track2[3].y);

    if (vehicle.left) {
        // move on left track
        vehicle.Move(track1[0], track1[1], track1[2], track1[3]);
    } else {
        // move on right track
        vehicle.Move(track2[0], track2[1], track2[2], track2[3]);
    }

    vehicle.Show();
}