

// gsap.registerPlugin(GSDevTools)
// GSDevTools.create({ paused: false, id: "Hero Animation" });

let tls = []
// let pointsArr = [{ x: 390, y: 82 }, { x: 125, y: 85 }, { x: 105, y: 202 }, { x: 180, y: 300 }, { x: 29, y: 300 }, { x: 191, y: 304 }, { x: 189, y: 197 }, { x: 111, y: 199 }, { x: 111, y: 405 }, { x: 26, y: 409 }, { x: 22, y: 678 }, { x: 192, y: 677 }, { x: 195, y: 402 }, { x: 110, y: 400 }, { x: 110, y: 461 }, { x: 280, y: 458 }, { x: 298, y: 518 }, { x: 435, y: 529 }, { x: 433, y: 618 }, { x: 287, y: 622 }, { x: 286, y: 683 }, { x: 579, y: 682 }, { x: 578, y: 618 }, { x: 436, y: 617 }, { x: 437, y: 527 }, { x: 573, y: 520 }, { x: 589, y: 454 }, { x: 845, y: 455 }, { x: 843, y: 674 }, { x: 684, y: 678 }, { x: 678, y: 451 }, { x: 586, y: 451 }, { x: 590, y: 274 }, { x: 676, y: 270 }, { x: 677, y: 209 }, { x: 843, y: 208 }, { x: 848, y: 335 }, { x: 678, y: 337 }, { x: 673, y: 263 }, { x: 585, y: 270 }, { x: 575, y: 219 }, { x: 368, y: 208 }, { x: 364, y: 324 }, { x: 506, y: 327 }, { x: 509, y: 214 }, { x: 298, y: 228 }, { x: 283, y: 252 }, { x: 278, y: 453 }, { x: 237, y: 452 }]


btn.addEventListener("click", createMolecule);

var tl = gsap.timeline();

function createMolecule(molName, counts) {

    var target = document.createElement("div");
    var target2 = document.createElement("div");
    target.classList.add("anim");
    target.classList.add("protein");
    target2.classList.add("anim");
    target2.classList.add("amino");
    document.body.appendChild(target);
    document.body.appendChild(target2);


    setTimeout(() => {
        let tw1 = gsap.to(target, {
            x: function (ctr) {
                var repeatCount = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
                return pointsArr[repeatCount].x
            },
            y: function (ctr) {
                var repeatCountY = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
                return pointsArr[repeatCountY].y
            },
            repeat: pointsArr.length - 1,
            repeatRefresh: true,
            duration: 2
        })

        let tw2 = gsap.to(target2, {
            x: function (ctr) {
                var repeatCountX2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
                return pointsArr[repeatCountX2].x
            },
            y: function (ctr) {
                var repeatCountY2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
                return pointsArr[repeatCountY2].y
            },
            repeat: pointsArr.length - 1,
            repeatRefresh: true,
            duration: 2
        })

        tl.add(tw2, "<+=1");


    }, 500);
    // tl.add(tween);
}


// GSDevTools.create();



// dissolve
// delete
// group animation

// createMolecule("p", 4)
// let arrayP = []
// for (let index = 0; index < arrayP.length; index++) {
//     const element = arrayP[index];

// }