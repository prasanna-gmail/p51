fish.addEventListener("click", function () {
    createNewFood("fish", "protien")
});
corn.addEventListener("click", function () {
    createNewFood("corn", "starch")
});


function createNewFood(foodName, molName) {

    console.log(foodName, molName)
    let newFood = document.createElement('div');
    newFood.classList.add(foodName);
    newFood.classList.add("anim");
    document.body.appendChild(newFood)

    let tl1 = intro();
    tl1.play();
}

function intro() {
    var tl = gsap.timeline();
    tl.fromTo(".anim", {
        x: 360
        , y: 0
    }, {
        x: 360
        , y: 90
    })
    return tl;
}

function middle() {
    var tl = gsap.timeline();
    tl.to(".anim", 1, {
        x: 135
        , y: 90
    })
    return tl;
}

function conclusion() {
    var tl = gsap.timeline();
    tl.to(".anim", 1, {
        x: 120
        , y: 170
    })

    return tl;
}

// stitch them together in a master timeline...
var master = gsap.timeline();
master
    .add(intro())
    .add(middle()) //with a gap of 2 seconds
    .add(conclusion()); //overlap by 1 second