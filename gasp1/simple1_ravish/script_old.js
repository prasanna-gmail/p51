

// gsap.registerPlugin(GSDevTools)
// GSDevTools.create({ paused: false, id: "Hero Animation" });

let tls = []
// let ps = [{ x: 390, y: 82 }, { x: 125, y: 85 }, { x: 105, y: 202 }, { x: 180, y: 300 }, { x: 29, y: 300 }, { x: 191, y: 304 }, { x: 189, y: 197 }, { x: 111, y: 199 }, { x: 111, y: 405 }, { x: 26, y: 409 }, { x: 22, y: 678 }, { x: 192, y: 677 }, { x: 195, y: 402 }, { x: 110, y: 400 }, { x: 110, y: 461 }, { x: 280, y: 458 }, { x: 298, y: 518 }, { x: 435, y: 529 }, { x: 433, y: 618 }, { x: 287, y: 622 }, { x: 286, y: 683 }, { x: 579, y: 682 }, { x: 578, y: 618 }, { x: 436, y: 617 }, { x: 437, y: 527 }, { x: 573, y: 520 }, { x: 589, y: 454 }, { x: 845, y: 455 }, { x: 843, y: 674 }, { x: 684, y: 678 }, { x: 678, y: 451 }, { x: 586, y: 451 }, { x: 590, y: 274 }, { x: 676, y: 270 }, { x: 677, y: 209 }, { x: 843, y: 208 }, { x: 848, y: 335 }, { x: 678, y: 337 }, { x: 673, y: 263 }, { x: 585, y: 270 }, { x: 575, y: 219 }, { x: 368, y: 208 }, { x: 364, y: 324 }, { x: 506, y: 327 }, { x: 509, y: 214 }, { x: 298, y: 228 }, { x: 283, y: 252 }, { x: 278, y: 453 }, { x: 237, y: 452 }]
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
        },
        y: function (index, target, targets) {
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
let dur = 0.5
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
            return ps[repeatCount].x
        }
        , y: function (ctr) {
            var repeatCountY = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
            return ps[repeatCountY].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur
    })

    // tw1.to(target, { x: 0 })
    let tw2 = gsap.to(target2, {
        x: function (ctr) {
            var repeatCountX2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return ps[repeatCountX2].x
        }
        , y: function (ctr) {
            var repeatCountY2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return ps[repeatCountY2].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur
    })
    let tw3 = gsap.to(target3, {
        x: function (ctr) {
            var repeatCountX3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return ps[repeatCountX3].x
        }
        , y: function (ctr) {
            var repeatCountY3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return ps[repeatCountY3].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur

    })
    // tw.delay(0.1);
    tw2.delay(0.1);
    tw3.delay(0.2);

    // tl.add(tw2, "<+=1");
    // tl.add(tween);


}
console.log("pkp timechange: ~ ps.length:", ps.length)
var animation = gsap.timeline({
    paused: false,
    onComplete: function (evt) {
        // what do I return here to be able to chain a promise 
        console.log("pkp timechange: ~ evt:", evt)

        animation.kill();
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
    // console.log("pkp timechange: ~ getRan ~ index:", index)
    // console.log("pkp timechange: ~ getX ~ index:", index)
    if (!range) {
        range = 100
    }
    // console.log("pkp timechange: ~ getRan ~ target:", target)

    // console.log("pkp timechange: ~ getRan ~ target.innerHTML:", target.innerHTML)


    let value = target.computedStyleMap().get('transform');


    let { x, y } = getTranslateXY(target)
    // console.log("pkp timechange: ~ getRan ~ x, y:", x, y)
    // const ran = Math.round(Math.random() * range)
    const ran = 0
    const ran2 = Math.round(gsap.utils.random(0, range, 2, true)());
    // console.log("pkp timechange: ~ getRan ~ ran2:", ran2)
    // console.log("pkp timechange: ~ getX ~ ran:", ran)
    if (index == 0) {
        target.innerHTML = x + ":" + y;

    }
    return ran2

    // return thergb = "rgb(" + r + "," + g + "," + b + ")";

}

//reusable function WIP
function removeElement(element) {
    if (typeof (element) === "string") {
        element = document.querySelector(element);
    }
    return function () {
        element.parentNode.removeChild(element);
    };
}

function getTranslateXY(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    // console.log('translateX: ', matrix.m41, matrix.m42);
    return { x: matrix.m41, y: matrix.m42 }
    // console.log("pkp timechange: ~ getTranslateX ~ matrix:", matrix)
}

function muFun(params) {
    console.log("pkp timechange: ~ muFun ~ params:", params)

}

var dur2 = 1 // how much time will play
var rn = 20
var stag1 = 0.5
var rny = 20
animation
    .fromTo(anim1, {
        x: function (i, t, ts) { return ps[0].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[0].y + getRan(i, t, ts, rn); },
        // backgroundColor: function (i, t, ts) { return getColor(i); }
        backgroundColor: "random([red, blue, green])"
    }, {
        x: function (i, t, ts) { return ps[1].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[1].y + getRan(i, t, ts, rn); },

        // x: "random([360, 365, 370, 380])",
        // y: "random([94,98,102,104])",
        // keyframes: [{ x: 360, duration: 1 }, { y: 100, duration: 1 }],
        duration: dur2,
        stagger: stag1
        , data: { d: "strat data" }
        // , delay: -0.25
        , onComplete: (sss) => {
            console.log("pkp timechange: ~ sss:", animation.data)
            console.log('complete1')
        }
        , onStart: () => { console.log('start1') }
    })
    .to(anim1, dur2, {

        // x: "random([360, 365, 370, 380])",
        // y: "random([94,98,102,104])"

        x: function (i, t, ts) { return ps[2].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[2].y + getRan(i, t, ts, rn - 10); }
        // keyframes: [{ x: 100, duration: 1, ease: Power1.easeInOut }, { y: 120, duration: 1, ease: Power1.easeInOut }]
        // , startAt: { x: -100, opacity: 1 }
        , stagger: stag1
        , onComplete: () => { console.log('complete2') }
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[3].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[3].y + getRan(i, t, ts, rn); }
        , stagger: stag1
        , onComplete: () => { console.log('complete3') }
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[4].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[4].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[5].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[5].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[6].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[6].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[7].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[7].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[8].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[8].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[9].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[9].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[10].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[10].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[11].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[11].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[12].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[12].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[13].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[13].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[14].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[14].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[15].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[15].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[16].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[16].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[17].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[17].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[18].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[18].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[19].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[19].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[20].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[20].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[21].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[21].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[22].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[22].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[23].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[23].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[24].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[25].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[26].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[26].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[27].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[27].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[28].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[28].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[29].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[29].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[30].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[30].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[31].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[31].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[32].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[32].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[33].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[33].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[34].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[34].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[35].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[35].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[36].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[36].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[37].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[37].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[38].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[38].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        x: function (i, t, ts) { return ps[38].x + getRan(i, t, ts, rn); },
        y: function (i, t, ts) { return ps[38].y + getRan(i, t, ts, rn); }
        , stagger: stag1
    })
    .to(anim1, dur2, {
        backgroundColor: function (i, t, ts) { return getColor(i); }
    })
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