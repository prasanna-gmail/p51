

// gsap.registerPlugin(GSDevTools)
// GSDevTools.create({ paused: false, id: "Hero Animation" });

let tls = []
// let pointsArr = [{ x: 390, y: 82 }, { x: 125, y: 85 }, { x: 105, y: 202 }, { x: 180, y: 300 }, { x: 29, y: 300 }, { x: 191, y: 304 }, { x: 189, y: 197 }, { x: 111, y: 199 }, { x: 111, y: 405 }, { x: 26, y: 409 }, { x: 22, y: 678 }, { x: 192, y: 677 }, { x: 195, y: 402 }, { x: 110, y: 400 }, { x: 110, y: 461 }, { x: 280, y: 458 }, { x: 298, y: 518 }, { x: 435, y: 529 }, { x: 433, y: 618 }, { x: 287, y: 622 }, { x: 286, y: 683 }, { x: 579, y: 682 }, { x: 578, y: 618 }, { x: 436, y: 617 }, { x: 437, y: 527 }, { x: 573, y: 520 }, { x: 589, y: 454 }, { x: 845, y: 455 }, { x: 843, y: 674 }, { x: 684, y: 678 }, { x: 678, y: 451 }, { x: 586, y: 451 }, { x: 590, y: 274 }, { x: 676, y: 270 }, { x: 677, y: 209 }, { x: 843, y: 208 }, { x: 848, y: 335 }, { x: 678, y: 337 }, { x: 673, y: 263 }, { x: 585, y: 270 }, { x: 575, y: 219 }, { x: 368, y: 208 }, { x: 364, y: 324 }, { x: 506, y: 327 }, { x: 509, y: 214 }, { x: 298, y: 228 }, { x: 283, y: 252 }, { x: 278, y: 453 }, { x: 237, y: 452 }]
/**
 
  return "random(0, 50, 5)";
  
 animation
    // .fromTo('#d1', 1, { x: 370, y: 0 })
    .fromTo(anim1, {
        x: 370
        , y: function (index, target, targets) {
            return 0;
        }
    }, {
        x: function (index, target, targets) {
            return 370;
        }
        , y: function (index, target, targets) {
            // let ran = "random(0, 50, 5)"
            // console.log("pkp timechange: ~ ran:", ran)
            return "random(0, 50, 5)";
        }
        , backgroundColor: function (index, target, targets) {
            return getColor();
        }
        , duration: 5
    })
 */

btn.addEventListener("click", createMolecule);
play.addEventListener("click", playMe);
pause.addEventListener("click", pauseMe);

function playMe(params) {
    console.log("pkp timechange: ~ playMe ~ params:", params)
    animation.play();
}
function pauseMe(params) {
    console.log("pkp timechange: ~ pauseMe ~ tl:", tl)
    console.log("pkp timechange: ~ playMe ~ params:", params)
    animation.pause();
}
var tl = gsap.timeline(
    // { paused: true, autoRemoveChildren: true }
);
let animClass = "anim"
let anim1 = ".anim"
let dur = 2
function onTimelineComplete(params) {
    console.log("pkp timechange: ~ onTimelineComplete ~ params:", params)
    if (params) {
        console.log("pkp timechange: ~ onTimelineComplete ~ params:", params)
        // params.parentNode.removeChild(params)
        // document.removeChild(params)
    } else {
        // console.log("pkp timechange: ~ onTimelineComplete ~ else:", params)

    }
}
function createMolecule(molName, counts) {

    var target = document.createElement("div");
    target.classList.add(animClass);
    target.classList.add("protein");
    document.body.appendChild(target);

    var target2 = document.createElement("div");
    target2.classList.add(animClass);
    target2.classList.add("amino");
    document.body.appendChild(target2);

    var target3 = document.createElement("div");
    target3.classList.add(animClass);
    target3.classList.add("fiber");
    document.body.appendChild(target3);



    let tw1 = gsap.to(target, {
        x: function (ctr) {
            var repeatCount = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
            return pointsArr[repeatCount].x
        }
        , y: function (ctr) {
            var repeatCountY = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
            return pointsArr[repeatCountY].y
        }
        , repeat: pointsArr.length - 1
        , repeatRefresh: true
        , duration: dur
    })

    // tw1.to(target, { x: 0 })
    let tw2 = gsap.to(target2, {
        x: function (ctr) {
            var repeatCountX2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return pointsArr[repeatCountX2].x
        }
        , y: function (ctr) {
            var repeatCountY2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return pointsArr[repeatCountY2].y
        }
        , repeat: pointsArr.length - 1
        , repeatRefresh: true
        , duration: dur
    })
    let tw3 = gsap.to(target3, {
        x: function (ctr) {
            var repeatCountX3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return pointsArr[repeatCountX3].x
        }
        , y: function (ctr) {
            var repeatCountY3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return pointsArr[repeatCountY3].y
        }
        , repeat: pointsArr.length - 1
        , repeatRefresh: true
        , duration: dur

    })
    // tw.delay(0.1);
    tw2.delay(0.1);
    tw3.delay(0.2);

    // tl.add(tw2, "<+=1");
    // tl.add(tween);


}

var animation = gsap.timeline({
    paused: false,
    onComplete: function (evt) {
        // what do I return here to be able to chain a promise 
        console.log("pkp timechange: ~ evt:", evt)
    }
})

function getColor(index) {
    // https://www.rapidtables.com/convert/color/index.html
    var r = Math.floor(Math.random() * 256); // range is 0-255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return thergb = "rgb(" + r + "," + g + "," + b + ")";

}

function getRan(index, target, targets, range) {
    // console.log("pkp timechange: ~ getX ~ index:", index)
    if (!range) {
        range = 100
    }
    const ran = Math.round(Math.random() * range)
    console.log("pkp timechange: ~ getX ~ ran:", ran)
    return ran

    // return thergb = "rgb(" + r + "," + g + "," + b + ")";

}


animation
    .fromTo(anim1, {
        x: function (index, target, targets) {
            return 370 + getRan(index, target, targets, 10);
        }
        , y: function (index, target, targets) {
            return 0;
        }
    }, {
        x: function (index, target, targets) {
            return 370 + getRan(index, target, targets, 20);
        }
        , y: function (index, target, targets) {
            return getRan(index, target, targets);
        }
        , backgroundColor: function (index, target, targets) {
            return getColor(index);
        }
        , duration: 5
    })
    .to(anim1, 1, {
        x: function (index, target, targets) {
            return 370 + getRan(index, target, targets, 20);
        }
        , y: function (index, target, targets) {
            return 85 + getRan(index, target, targets, 10);
        }
    })
    .to(anim1, 1, { x: 129, y: 89 })
    .to(anim1, 1, { x: 120, y: 99 })
    .to(anim1, 1, { x: 99, y: 160 })
    .to(anim1, 1, { x: 99, y: 198 })
    .to(anim1, 1, { x: 90, y: 211 })
    .to(anim1, 1, { x: 111, y: 221 })
    .to(anim1, 1, { x: 121, y: 241 })
    .to(anim1, 1, { x: 121, y: 241 })
    .to(anim1, 1, { x: 81, y: 241 })
    .to(anim1, 1, { x: 90, y: 281 })
    .to(anim1, 1, { x: 104, y: 281 })
    .to(anim1, 1, { x: 109, y: 381 })
    .to(anim1, 1, { x: 100, y: 391 })
    .to(anim1, 1, { x: 130, y: 399 })
    .to(anim1, 3, { opacity: 0 });

// setTimeout(() => { }, 500);


// GSDevTools.create();



// dissolve
// delete
// group animation

// createMolecule("p", 4)
// let arrayP = []
// for (let index = 0; index < arrayP.length; index++) {
//     const element = arrayP[index];

// }