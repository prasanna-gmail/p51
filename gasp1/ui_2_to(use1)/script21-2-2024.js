let moleCount = 5;
let foodAnim = ".anim";
let moleAnim = ".anim1";
let stomach_rndX = 100;
let stomach_rndY = 90;
let sIntestine_rndX = 120;
let sIntestine_rndY = 100;

fish.addEventListener("click", function () {
    createNewFood("fish", "protien")
});
corn.addEventListener("click", function () {
    createNewFood("corn", "starch")
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

function createNewFood(foodName, molName) {

    console.log(foodName, molName)
    let newFood = document.createElement('div');
    newFood.classList.add(foodName);
    newFood.classList.add("anim");
    document.body.appendChild(newFood)

    let foodP1 = foodPipe1Animation(foodAnim);
    foodP1.play();
    foodP1.then(function(){
        setTimeout(()=>{
            document.body.removeChild(newFood)
            createNewMolecules(molName)
        },1000)
    })
}


function createNewMolecules(molName) {
    let newMoleculeEle;
    for (let i = 0; i < moleCount; i++) {
        newMoleculeEle = document.createElement("div");
        newMoleculeEle.classList.add(molName);
        newMoleculeEle.setAttribute("id",molName+i);
        newMoleculeEle.classList.add("anim1");
        document.body.appendChild(newMoleculeEle)
    }
    // let moleP2Anim = moleculePipe2Animation(moleAnim);
    // moleP2Anim.play();

    let master2 = gsap.timeline();
    master2
        .add(moleculePipe2Animation(moleAnim)) //with a gap of 2 seconds
        .add(moleculePipe3Animation(moleAnim)) //overlap by 1 second
        .add(stomachMoleAnimation(moleAnim))

}

function foodPipe1Animation(ele) {
    let tl = gsap.timeline();
    tl.fromTo(ele, {
        x: 360
        , y: 0
    }, {
        x: 360
        , y: 86
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

function stomachMoleAnimation(ele){
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

