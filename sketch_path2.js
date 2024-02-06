let path = []; // The array to store the vectors drawn

let startX = 0;
let startY = 0;
let mouse = 0;  // 1 if mouse is held down, if so draw vector 
let tri = 10; // Triangle size

let go = false;
let speed = 20; // higher is slower
let tail = 0;  // current vector index when ball is moving
let travelv = 0; // 0 means ball is on the vector, 1 means ball is traveling between vectors (aka from the tip of one vector to the tail of another)
let count = 0; //count goes from 0 to speed for each path it travels

let cW = 600;
let cH = 400;

function setup() {
    createCanvas(cW, cH);
}

function draw() {
    background(240);
    speed = 100 - document.querySelector(".slider").value;  // Adjust speed with HTML input element with class name "slider"

    // Draw the start position (green ball) if path contains a vector
    if (path.length) {
        fill(20, 200, 20);
        stroke(0);
        circle(startX, startY, 20);
    }
    fill(255)

    // Draw each vector in the path array
    let bezierCounter = 1;
    for (let [i, v] of path.entries()) {
        stroke(0);
        fill(255 * i / path.length, 255 * (path.length - i) / path.length, 0) // Transition from green to red based on path position
        line(v[0], v[1], v[2], v[3]);

        // Do some trig to calculate the angle to draw the tip of the vector with the correct orientation
        let angle = atan2((v[3] - v[1]), (v[2] - v[0]));
        triangle(v[2], v[3], v[2] - 2 * tri * cos(angle) + tri * sin(angle), v[3] - 2 * tri * sin(angle) - tri * cos(angle), v[2] - 2 * tri * cos(angle) - tri * sin(angle), v[3] - 2 * tri * sin(angle) + tri * cos(angle));
    }


    // Draw the vector currently being created by the user with a mouse drag
    if (mouse) {
        line(path[path.length - 1][0], path[path.length - 1][1], mouseX, mouseY);
        let theta = atan2((mouseY - path[path.length - 1][1]), (mouseX - path[path.length - 1][0]));
        triangle(mouseX, mouseY, mouseX - 2 * tri * cos(theta) + tri * sin(theta), mouseY - 2 * tri * sin(theta) - tri * cos(theta), mouseX - 2 * tri * cos(theta) - tri * sin(theta), mouseY - 2 * tri * sin(theta) + tri * cos(theta));
    }

    // Stop the ball once it has reached the end of the path
    if (tail === path.length) {
        go = false;
        document.querySelector(".slider").style.display = "block";  // Changing speed while the ball is moving messes up the length traveled by the ball.  I think this can be fixed by having the slider value also change "count" but I haven't figured out how yet
    }

    if (go) {
        fill(0);
        stroke(255);
        let v = path[tail];  // Current vector
        let n = path[tail + 1];  // Next vector
        if (tail === path.length - 1) {
            n = [v[2], v[3], v[0], v[1]];  // When at the end of the path make next vector equal to the mirror of the current vector so the last path is just staying in one place
        }

        let vmag = 0;  // if travelv = 0 vmag is the distance from tail to tip of current vector (current vector magnitude).  if travelv = 1 vmag is the distance from tip-of-current-vector to tail-of-next-vector
        let a = 0;     // angle of travel


        if (travelv === 0) {
            a = atan2((v[3] - v[1]), (v[2] - v[0]))  // Angle from tail to tip of current vector
            vmag = dist(v[0], v[1], v[2], v[3])
            circle(v[0] + vmag * count / speed * cos(a), v[1] + vmag * count / speed * sin(a), 20);
        } else {
            a = atan2((n[1] - v[3]), (n[0] - v[2]));  // Angle from tip of current vector to tail of next vector
            vmag = dist(n[0], n[1], v[2], v[3])
            circle(v[2] + vmag * count / speed * cos(a), v[3] + vmag * count / speed * sin(a), 20);
        }

        // Once "count = speed" the ball has completed traveling the length of its current "vmag"
        if (count === speed) {
            count = 0;              // reset the count
            if (travelv === 1) {    // if we just traveled from current-vector-tip to next-vector-tail 
                tail += 1;            // we can move on to the next vector in our "path" array
                travelv = 0;          // we will not be traveling between vectors next time
            } else {
                travelv += 1          // Since "travelv" was 0 during the travel just completed we just completed next time it will be traveling between vectors, so "travelv" = 1
            }
        }
        count += 1;               // Iterate "count" once per draw cycle
    }
}

function mousePressed() {
    if (mouseX > 0 && mouseX < cW && mouseY > 0 && mouseY < cH) {
        mouse = 1;
        if (!path.length) {
            startX = mouseX;
            startY = mouseY;
        }
        path.push([mouseX, mouseY]);
    }
}

function mouseReleased() {
    if (path.length && mouseX > 0 && mouseX < cW && mouseY > 0 && mouseY < cH) {
        mouse = 0;
        path[path.length - 1].push(mouseX, mouseY)
    } else if (path && path.length && path[path.length - 1].length === 2) {
        mouse = 0;
        path.pop(); //if we clicked on the canvas and released off get rid of that vector
    }
}

function follow() {
    if (path && path.length) {
        go = true;
        tail = 0;
        travelv = 0;
        count = 0;
        document.querySelector(".slider").style.display = "none";
    }
}

function nofollow() {
    tail = path.length;
    travelv = 0;
    count = 0;
    mouse = 0;
    tri = 10;
    go = false;
}

function newPath() {
    path = [];
    tail = 0;
    travelv = 0;
    count = 0;
    startX = 0;
    startY = 0;
    mouse = 0;
    tri = 10;
    go = false;
}