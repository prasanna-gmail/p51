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

fish.addEventListener("click", function () {
    fishClick++
    createNewFood("fish", "protien", fishClick)
});
corn.addEventListener("click", function () {
    cornClick++
    createNewFood("corn", "starch", cornClick)
});




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
    console.log("svgTag--->",svgTag)
    let foodGroup=document.createElementNS("http://www.w3.org/2000/svg","g");

    foodGroup.appendChild(circleElement(foodName,ctr))
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

function circleElement(foodName,ctr,index){
    let ns = "http://www.w3.org/2000/svg";
    let innerCircle = document.createElementNS(ns,"circle");
    // innerCircle.setAttribute("cx","70");
    // innerCircle.setAttribute("cy", "70");
    innerCircle.setAttribute("r", "7");
    // innerCircle.setAttribute("stroke", "red");
    innerCircle.setAttribute("stroke-width", "1");
    innerCircle.setAttribute("fill", getColor());
    innerCircle.setAttribute("id",foodName+ctr);
    innerCircle.classList.add(foodName);
    innerCircle.classList.add("anim");

    return innerCircle;
}

function circleMoleculeElement(molName,id,shape){
    let ns = "http://www.w3.org/2000/svg";
    let innerCircle = document.createElementNS(ns,shape);
    // innerCircle.setAttribute("cx","70");
    // innerCircle.setAttribute("cy", "70");
    
    // innerCircle.setAttribute("stroke", "red");
    innerCircle.setAttribute("stroke-width", "1");
    innerCircle.setAttribute("fill", getColor());
    innerCircle.setAttribute("id", id);
    innerCircle.classList.add(molName);
    innerCircle.classList.add("anim1");
    if(shape == "rect"){
        innerCircle.setAttribute("width", "10");
        innerCircle.setAttribute("height", "10");
    }else{
        innerCircle.setAttribute("r", "7");
    }

    return innerCircle;
}
function createNewMolecules(molName, ctr) {
    let master2 = gsap.timeline();
    let newMoleculeEle;
    for (let i = 0; i < moleCount; i++) {
        let id = molName + "_" + ctr + "_" + i
        let target = "#" + id;


        // newMoleculeEle = document.createElement("div");
        // newMoleculeEle.classList.add(molName);
        
        // console.log("🚀 ~ createNewMolecules ~ target:", target)
        // newMoleculeEle.setAttribute("id", id);
        // newMoleculeEle.classList.add("anim1");
        // document.body.appendChild(newMoleculeEle)

let shape;
if(molName == "starch"){
    shape = "rect"
}else if(molName == "protien"){
    shape = "circle"
}
        let svgTag = document.getElementById("container");
        console.log("svgTag--->",svgTag)
        let foodGroup=document.createElementNS("http://www.w3.org/2000/svg","g");
        
        foodGroup.appendChild(circleMoleculeElement(molName,id,shape))
        svgTag.appendChild(foodGroup);
    
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
    const allPath = p1.concat(p2, p3, p4, p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51)
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

// stitch them together in a master timeline...
let master = gsap.timeline();
master
    .add(middle()) //with a gap of 2 seconds
    .add(conclusion()); //overlap by 1 second

