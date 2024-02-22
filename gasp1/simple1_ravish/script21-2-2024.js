
fish.addEventListener("click",function(){
    createFood("fish","protien")
});
corn.addEventListener("click",function(){
    createFood("corn","starch")
});
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
var moleCount = 8;
var dur2 = 3 // how much time will play
var rn = 20
var stag1 = 0.5
var rny = 20
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


function createFood(food,molecule){
let foodTarget = document.createElement('div');
foodTarget.classList.add(food);
foodTarget.classList.add("anim");
document.body.appendChild(foodTarget)

let animation1 = gsap.timeline({
    paused: false,
    onComplete: function (evt) {
        // what do I return here to be able to chain a promise 
        console.log("pkp timechange: ~ evt:", evt)
        document.body.removeChild(foodTarget)
        // animation.play();
    }


})

animation1
    .fromTo("."+food, {
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
        duration: 0.5,
        stagger: 1
        , data: { d: "strat data" }
        // , delay: -0.25
        , onComplete: (sss) => {
            console.log("pkp timechange: ~ sss:", animation1.data)
            console.log('complete1')
            createMolecule1(molecule,moleCount)
            // animation.play();
        }
        , onStart: () => { console.log('start1') }
    })

}
function createMolecule1(molName, counts) {
    let molecules;
    for(let i=0; i<counts; i++){
        molecules = document.createElement("div");
        molecules.classList.add(molName);
        molecules.classList.add("anim");
        document.body.appendChild(molecules)
    }



    var animation = gsap.timeline({
        paused: false,
        onComplete: function (evt) {
            // what do I return here to be able to chain a promise 
            console.log("pkp timechange: ~ evt:", evt)
    
            animation.kill();
        }
    })







    animation.fromTo(anim1, {
            x: function (i, t, ts) { return ps[1].x + getRan(i, t, ts, rn); },
            y: function (i, t, ts) { return ps[1].y + getRan(i, t, ts, rn); },
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
    
    }

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