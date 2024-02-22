gsap.registerPlugin(MotionPathPlugin);
let moleCount = 50;
let foodAnim = ".anim";
let moleAnim = ".anim1";
let stomach_rndX = 100;
let stomach_rndY = 90;
let sIntestine_rndX = 120;
let sIntestine_rndY = 100;
let fishClick = 0;
let cornClick = 0;
let showProtien = true;
let showStarch = true;

fish.addEventListener("click", function () {
    fishClick++
    createNewFood("fish", "protien", fishClick)
});
corn.addEventListener("click", function () {
    cornClick++
    createNewFood("corn", "starch", cornClick)
});

proteinBtn.addEventListener("click", function () {

    let protienEle = document.querySelectorAll(".protien")
    protienEle.forEach(ele => {
        ele.classList.toggle("hide");
    })
})

starchBtn.addEventListener("click", function () {

    let starchEle = document.querySelectorAll(".starch")
    starchEle.forEach(ele => {
        ele.classList.toggle("hide");
    })
})


var dur2 = 3 // how much time will play
var rn = 20
var stag1 = 0.5
var rny = 20
// random position.....
function getRan(index, target, targets, range) {
    if (!range) {
        range = 100
    }
    let value = target.computedStyleMap().get('transform');

    let { x, y } = getTranslateXY(target)
    const ran = 0
    const ran2 = Math.round(gsap.utils.random(0, range, 2, true)());
    if (index == 0) {
        target.innerHTML = x + ":" + y;
    }
    return ran2
}

function getTranslateXY(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    // console.log('translateX: ', matrix.m41, matrix.m42);
    return { x: matrix.m41, y: matrix.m42 }
    // console.log("pkp timechange: ~ getTranslateX ~ matrix:", matrix)
}

function createNewFood(foodName, molName, ctr) {
    console.log("🚀 ~ createNewFood ~ ctr:", ctr)

    console.log(foodName, molName)
    // let newFood = document.createElement('div');
    // newFood.classList.add(foodName);
    // newFood.classList.add("anim");
    // document.body.appendChild(newFood)


    let svgTag = document.getElementById("container");
    console.log("svgTag--->", svgTag)
    let foodGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    foodGroup.appendChild(circleElement(foodName, ctr))
    svgTag.appendChild(foodGroup);



    let foodP1 = foodPipe1Animation(foodAnim);
    foodP1.play();
    foodP1.then(function () {
        setTimeout(() => {
            svgTag.removeChild(foodGroup)
            createNewMolecules(molName, ctr)
        }, 1000)
    })
}

function getColor(index) {
    // https://www.rapidtables.com/convert/color/index.html
    var r = Math.floor(Math.random() * 256); // range is 0-255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return thergb = "rgb(" + r + "," + g + "," + b + ")";

}

function circleElement(foodName, ctr, index) {
    let ns = "http://www.w3.org/2000/svg";
    let innerCircle = document.createElementNS(ns, "circle");
    // innerCircle.setAttribute("cx","70");
    // innerCircle.setAttribute("cy", "70");
    innerCircle.setAttribute("r", "7");
    // innerCircle.setAttribute("stroke", "red");
    innerCircle.setAttribute("stroke-width", "1");
    // innerCircle.setAttribute("fill", getColor());
    innerCircle.setAttribute("id", foodName + ctr);
    innerCircle.classList.add(foodName);
    innerCircle.classList.add("anim");

    return innerCircle;
}

function createProtienMolecule(molName, id) {
    let gElement = `
    
    <path
        d="m362.56,200.05l-98.87-98.87c-3.38-3.38-7.78-5.39-12.51-5.72l-12.33-12.33c3.47-1.17,7.14-1.78,10.89-1.78h0c9.04,0,17.53,3.51,23.9,9.88l48.9,48.9,40.01,40.01v19.91h0Zm-79.92-117.82c-9.07-9.07-20.99-13.61-32.9-13.61-11.22,0-22.45,4.03-31.3,12.08l28.16,28.16c.99-.49,2.06-.73,3.14-.73,1.8,0,3.59.68,4.96,2.05l102.56,102.56c5.24,5.24,11.43,8.95,18.02,11.13v-48.99l-43.74-43.74-48.9-48.9h0Z" />
    <path
        d="m346.19,266.44l-12.18-12.18c-.24-4.65-2.16-9.18-5.63-12.66l-102.56-102.56c-8.05-8.05-11.25-19.4-9.31-30.04l16.33,16.33c.82,1.36,1.8,2.62,2.94,3.75l102.56,102.56c6.15,6.15,9.61,14.34,9.75,23.06.07,4.05-.59,8.02-1.9,11.73h0Zm-101.42-146.34c-.7-.7-1.21-1.51-1.56-2.37l-30.62-30.62c-13.77,18.22-12.36,44.33,4.23,60.93l102.56,102.56c2.18,2.18,2.51,5.5,1.01,8.03l28.06,28.06c16.84-18.06,16.47-46.44-1.13-64.04l-102.56-102.56h0Z" />
    <path
        d="m235.52,373.66c-8.93,0-17.31-3.47-23.6-9.76l-101.43-101.43v-18.73c2.11,1.33,4.09,2.91,5.91,4.73l105.47,105.47c1.29,1.29,2.75,2.38,4.35,3.26l15.81,15.81c-2.13.42-4.32.64-6.51.64h0Zm-4.66-28.7l-105.47-105.47c-7.73-7.73-17.52-12.16-27.62-13.31v41.57l105.15,105.15c8.99,8.99,20.79,13.48,32.6,13.48,9.97,0,19.95-3.21,28.23-9.62l-30.17-30.17c-.99-.31-1.93-.85-2.72-1.63h0Z" />
    <path
        d="m319.8,288.28c-1.66.25-3.36.38-5.08.38-8.94,0-17.32-3.47-23.62-9.76l-102.56-102.56c-3.73-3.73-8.68-5.78-13.96-5.78-2.27,0-4.47.38-6.55,1.11l-10.56-10.56c5.13-3.01,10.99-4.61,17.1-4.61,9.05,0,17.54,3.51,23.91,9.88l46.58,46.59c.54.93,1.21,1.81,2.01,2.62l72.7,72.7h0Zm-63.41-81.99l-48.9-48.9c-9.07-9.07-20.99-13.61-32.91-13.61s-23.83,4.54-32.91,13.61l-2.95,2.95,27.94,27.94,2.95-2.95c1.37-1.37,3.17-2.05,4.96-2.05s3.59.68,4.96,2.05l102.56,102.56c8.99,8.99,20.8,13.49,32.61,13.49,9.59,0,19.18-2.96,27.26-8.89l-85.89-85.89.3-.3h0Z" />
    <path
        d="m268.58,351.35l-11.33-11.33c.66-5.67-1.18-11.58-5.52-15.92l-105.47-105.47c-7.99-7.99-11.2-19.26-9.34-29.86l16.73,16.73c.74,1.14,1.6,2.2,2.57,3.17l105.47,105.47c10.04,10.04,12.34,24.95,6.89,37.21h0Zm-103.38-151.68c-.59-.59-1.05-1.27-1.39-1.99l-30.88-30.88c-13.67,18.22-12.24,44.25,4.33,60.81l105.48,105.47c2.57,2.57,2.57,6.77,0,9.34l-.53.53,27.94,27.94.53-.53c17.98-17.98,17.98-47.24,0-65.22l-105.47-105.47h0Z" />
    <path
        d="m227.5,442.28c-118.43,0-214.78-96.35-214.78-214.78S109.07,12.72,227.5,12.72s214.78,96.35,214.78,214.78-96.35,214.78-214.78,214.78h0ZM388.37,66.63c-20.89-20.89-45.22-37.29-72.31-48.75C288,6.02,258.21,0,227.5,0s-60.5,6.02-88.56,17.88c-27.09,11.46-51.42,27.86-72.31,48.75-20.89,20.89-37.29,45.22-48.75,72.31C6.02,167,0,196.79,0,227.5s6.02,60.5,17.88,88.56c11.46,27.09,27.86,51.42,48.75,72.31,20.89,20.89,45.22,37.29,72.31,48.75,28.05,11.86,57.85,17.88,88.56,17.88s60.5-6.02,88.55-17.88c27.09-11.46,51.42-27.86,72.31-48.75,20.89-20.89,37.29-45.22,48.75-72.31,11.86-28.05,17.88-57.85,17.88-88.56s-6.02-60.5-17.88-88.56c-11.46-27.09-27.86-51.42-48.75-72.31h0Z" />
    <path
        d="m227.5,414.67c-103.21,0-187.17-83.96-187.17-187.17S124.29,40.33,227.5,40.33s187.17,83.96,187.17,187.17-83.96,187.17-187.17,187.17h0Zm0-387.06c-53.39,0-103.59,20.79-141.34,58.55-37.75,37.75-58.55,87.95-58.55,141.34s20.79,103.59,58.55,141.34c37.75,37.75,87.95,58.55,141.34,58.55s103.59-20.79,141.34-58.55c37.75-37.75,58.55-87.95,58.55-141.34s-20.79-103.59-58.55-141.34c-37.75-37.75-87.95-58.55-141.34-58.55h0Z" />
`;

    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("name", "mygroup")
    group.setAttribute("id", id);
    group.setAttribute("width", "10");
    group.setAttribute("height", "10");
    // group.setAttribute("transform", "scale(0.045)");
    group.classList.add(molName);
    group.classList.add("anim1");
    group.innerHTML = gElement
    return group;
}
function circleMoleculeElement(molName, id, shape) {
    let ns = "http://www.w3.org/2000/svg";
    let innerCircle = document.createElementNS(ns, shape);
    // innerCircle.setAttribute("cx","70");
    // innerCircle.setAttribute("cy", "70");

    // innerCircle.setAttribute("stroke", "red");
    innerCircle.setAttribute("stroke-width", "1");
    // innerCircle.setAttribute("fill", getColor());
    innerCircle.setAttribute("id", id);
    innerCircle.classList.add(molName);
    innerCircle.classList.add("anim1");
    if (shape == "rect") {
        innerCircle.setAttribute("width", "10");
        innerCircle.setAttribute("height", "10");
    }

    return innerCircle;
}
function createNewMolecules(molName, ctr) {
    let master2 = gsap.timeline();
    let newMoleculeEle;
    for (let i = 0; i < moleCount; i++) {
        let id = molName + "_" + ctr + "_" + i
        let target = "#" + id;

        let shape;

        let svgTag = document.getElementById("container");
        console.log("svgTag--->", svgTag)
        let foodGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");


        if (molName == "starch") {
            shape = "rect";
            foodGroup.appendChild(circleMoleculeElement(molName, id, shape))
            svgTag.appendChild(foodGroup);
        } else if (molName == "protien") {
            svgTag.appendChild(createProtienMolecule(molName, id));
            shape = "circle"
        }

       

        master2.add(go(target))
    }
    // let moleP2Anim = moleculePipe2Animation(moleAnim);
    // moleP2Anim.play();
    //with a gap of 2 seconds

}

function go(target) {

    var randomNumX = gsap.utils.random(50, 90),
        randomNumY = gsap.utils.random(0, 150),
        randStagger = gsap.utils.random([-0.5, 0.5]),
        randDur = gsap.utils.random(0.5, 3);
    //   let rawPath = MotionPathPlugin.arrayToRawPath(anchors, {curviness:0.5})
    var action = gsap.to(target, {
        motionPath: {
            // path:[ {x:260, y:90}, {x:115, y:90},{x:110, y:130}],
            path: getAllPath(0, "from motion path"),
            align: getAllPath(0, "from motion path"),
            curviness: 1,
            start: 0.07
        },
        duration: 20,
        stagger: 0.5,
        delay: 0,
        ease: "power1.inOut",
        immediateRender: true,
    })

    return action;
};


function getAllPath(seqNo, callee) {
    console.log("🚀 ~ getPath ~ callee:", callee)
    // let paths = document.querySelector("#path");
    // console.log("🚀 ~ getPath ~ paths:", paths)
    // let pathPoints = MotionPathPlugin.getRawPath(paths);
    // console.log("🚀 ~ getPath ~ pathPoints:", pathPoints)
    // let allPath = [];
    let p1 = getsStep1();
    let p2 = getsStep2();
    let p3 = getsStep3();
    let p4 = getsStep4();
    let p5 = getsStep5();
    let p6 = getsStep6();
    let p7 = getsStep7();
    let p8 = getsStep8();
    let p9 = getsStep9();
    let p10 = getsStep10();
    let p11 = getsStep11();
    let p12 = getsStep12();
    let p13 = getsStep13();
    let p14 = getsStep14();
    let p15 = getsStep15();
    let p16 = getsStep16();
    let p17 = getsStep17();
    let p18 = getsStep18();
    let p19 = getsStep19();
    let p20 = getsStep20();
    let p21 = getsStep21();
    let p22 = getsStep22();
    let p23 = getsStep23();
    let p24 = getsStep24();
    let p25 = getsStep25();
    let p26 = getsStep26();
    let p27 = getsStep27();
    let p28 = getsStep28();
    let p29 = getsStep29();
    let p30 = getsStep30();
    let p31 = getsStep31();
    let p32 = getsStep32();
    let p33 = getsStep33();
    let p34 = getsStep34();
    let p35 = getsStep35();
    let p36 = getsStep36();
    let p37 = getsStep37();
    let p38 = getsStep38();
    let p39 = getsStep39();
    let p40 = getsStep40();
    let p41 = getsStep41();
    let p42 = getsStep42();
    let p43 = getsStep43();
    let p44 = getsStep44();
    let p45 = getsStep45();
    let p46 = getsStep46();
    let p47 = getsStep47();
    let p48 = getsStep48();
    let p49 = getsStep49();
    let p50 = getsStep50();
    let p51 = getsStep51();
    // let p4 = getsStep4();

    //   allPath.push(p1,p2,p3)
    const allPath = p1.concat(p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51)
    console.log("🚀 ~ getAllPath ~ allPath:", allPath)
    return allPath;

}


function getsStep1(params) {
    return [{ x: 360, y: 82 }]
}

function getsStep2(params) {
    return [{ x: 115, y: 82 }]
}

function getsStep3(params) {
    return [{ x: 110, y: 160 }]
}

function getsStep4(params) {
    return [{ x: 110, y: 200 }]
}
function getsStep5(params) {
    return [{ x: 110, y: 250 }]
}

function getsStep6(params) {
    return [{ x: 110, y: 300 }]
}

function getsStep7(params) {
    return [{ x: 110, y: 400 }]
}
function getsStep8(params) {
    return [{ x: 110, y: 500 }]
}

function getsStep9(params) {
    return [{ x: 110, y: 600 }]
}
function getsStep10(params) {
    return [{ x: 150, y: 600 }]
}

function getsStep11(params) {
    return [{ x: 150, y: 400 }]
}

function getsStep12(params) {
    return [{ x: 250, y: 400 }]
}

function getsStep13(params) {
    return [{ x: 250, y: 220 }]
}

function getsStep14(params) {
    return [{ x: 350, y: 210 }]
}

function getsStep15(params) {
    return [{ x: 350, y: 290 }]
}

function getsStep16(params) {
    return [{ x: 400, y: 330 }]
}

function getsStep17(params) {
    return [{ x: 440, y: 290 }]
}
function getsStep18(params) {
    return [{ x: 440, y: 230 }]
}
function getsStep19(params) {
    return [{ x: 460, y: 200 }]
}
function getsStep20(params) {
    return [{ x: 520, y: 200 }]
}
function getsStep21(params) {
    return [{ x: 545, y: 280 }]
}

function getsStep22(params) {
    return [{ x: 545, y: 430 }]
}
function getsStep23(params) {
    return [{ x: 510, y: 470 }]
}

function getsStep24(params) {
    return [{ x: 400, y: 475 }]
}

function getsStep25(params) {
    return [{ x: 300, y: 475 }]
}
function getsStep26(params) {
    return [{ x: 260, y: 445 }]
}

function getsStep27(params) {
    return [{ x: 250, y: 220 }]
}

function getsStep28(params) {
    return [{ x: 500, y: 200 }]
}
function getsStep29(params) {
    return [{ x: 550, y: 240 }]
}

function getsStep30(params) {
    return [{ x: 545, y: 440 }]
}
function getsStep31(params) {
    return [{ x: 500, y: 470 }]
}
function getsStep32(params) {
    return [{ x: 390, y: 475 }]
}
function getsStep33(params) {
    return [{ x: 390, y: 540 }]
}
function getsStep34(params) {
    return [{ x: 290, y: 540 }]
}
function getsStep35(params) {
    return [{ x: 290, y: 600 }]
}

function getsStep36(params) {
    return [{ x: 500, y: 600 }]
}
function getsStep36(params) {
    return [{ x: 500, y: 540 }]
}
function getsStep37(params) {
    return [{ x: 390, y: 540 }]
}
function getsStep38(params) {
    return [{ x: 390, y: 475 }]
}
function getsStep39(params) {
    return [{ x: 500, y: 470 }]
}
function getsStep40(params) {
    return [{ x: 565, y: 410 }]
}
function getsStep41(params) {
    return [{ x: 600, y: 410 }]
}
function getsStep42(params) {
    return [{ x: 610, y: 600 }]
}

function getsStep43(params) {
    return [{ x: 710, y: 600 }]
}
function getsStep44(params) {
    return [{ x: 710, y: 410 }]
}
function getsStep45(params) {
    return [{ x: 555, y: 410 }]
}
function getsStep46(params) {
    return [{ x: 555, y: 280 }]
}

function getsStep47(params) {
    return [{ x: 630, y: 280 }]
}

function getsStep48(params) {
    return [{ x: 680, y: 320 }]
}

function getsStep49(params) {
    return [{ x: 760, y: 270 }]
}

function getsStep50(params) {
    return [{ x: 690, y: 150 }]
}

function getsStep51(params) {
    return [{ x: 690, y: 100 }]
}


function foodPipe1Animation(ele) {
    let tl = gsap.timeline();
    tl.fromTo(ele, {
        x: 370
        , y: 0
    }, {
        x: 370
        , y: 84
    })
    return tl;
}

function moleculePipe2Animation(ele) {
    let tl = gsap.timeline();
    tl.fromTo(ele, {
        x: 360
        , y: 86
    }, {
        x: 110
        , y: 87,
        duration: 1,
        stagger: 0.5
    })
    return tl;
}

function moleculePipe3Animation(ele) {
    let tl = gsap.timeline();
    tl.fromTo(ele, {
        x: 110
        , y: 87
    }, {
        x: 107
        , y: 165,
        duration: 1,
        stagger: 0.5
    })
    return tl;
}

function stomachMoleAnimation(ele) {
    let tl = gsap.timeline();
    tl.fromTo(ele, {
        x: function (i, t, ts) { return 10 + getRan(i, t, ts, 10); },
        y: function (i, t, ts) { return 165 + getRan(i, t, ts, 120); },
    }, {
        x: function (i, t, ts) { return 60 + getRan(i, t, ts, 100); },
        y: function (i, t, ts) { return 165 + getRan(i, t, ts, 120); },
        duration: 3,
        stagger: 0.5
    })
    return tl;
}

function middle() {
    let tl = gsap.timeline();
    tl.to(".anim", 1, {
        x: 135
        , y: 90
    })
    return tl;
}

function conclusion() {
    let tl = gsap.timeline();
    tl.to(".anim", 1, {
        x: 120
        , y: 170
    })

    return tl;
}

function createCO2() {
    let carbon;
    setInterval(() => {
        let svgTag = document.getElementById("container");
        console.log("svgTag--->", svgTag)
        let carbonGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

        carbonGroup.appendChild(carbonMolecule(molName, id, shape))
        svgTag.appendChild(carbonGroup);
    })




    let co2 = gsap.timeline();

}

function carbonMolecule() {
    let ns = "http://www.w3.org/2000/svg";
    let innerCircle = document.createElementNS(ns, "circle");
    innerCircle.setAttribute("r", "7");
    innerCircle.setAttribute("stroke-width", "1");
    innerCircle.setAttribute("fill", getColor());
    innerCircle.setAttribute("id", foodName + ctr);
    innerCircle.classList.add(foodName);
    innerCircle.classList.add("anim");

    return innerCircle;
}

function goC02() {

}

// stitch them together in a master timeline...
let master = gsap.timeline();
master
    .add(middle()) //with a gap of 2 seconds
    .add(conclusion()); //overlap by 1 second

