
function cubic(p0, p1, p2, p3, t) {
    let v1 = quadratic(p0, p1, p2, t);
    let v2 = quadratic(p1, p2, p3, t);
    let x = lerp(v1.x, v2.x, t);
    let y = lerp(v1.y, v2.y, t);

    return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    return createVector(x, y);
}

class Vehicle {
    constructor(x, y, sizeX, sizeY, speed, t, left) {
        this.x = x;
        this.y = y;
        this.size = createVector(sizeX, sizeY)
        this.speed = speed;
        this.t = t;
        this.left = left;
    }

    Show() {
        fill(156, 80, 182);
        strokeWeight(3);
        ellipse(this.x, this.y, this.size.x, this.size.y);
    }

    Reset() {
        this.x = 0;
        this.y = 0;
        this.t = 0;
    }

    Move(p0, p1, p2, p3) {
        if (this.t >= 1) {
            this.Reset();
            this.left = !this.left;
        } else {
            this.t += 0.01 * this.speed;
        }

        let pos = cubic(p0, p1, p2, p3, this.t);
        this.x = pos.x;
        this.y = pos.y;
    }
}