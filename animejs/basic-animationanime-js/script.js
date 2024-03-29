// https://www.w3schools.com/jsref/jsref_class_extends.asp

class Animation {
  constructor(type) {
    this.type = type;
  }
  play() {
    return 'I animating ' + this.carname;
  }
}
class Molecule {
  constructor(brand) {
    this.carname = brand;
  }
  animate() {
    return 'I animating ' + this.carname;
  }
}


class Protein extends Molecule {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  animate() {
    myProtAnimation.play();
  }
  show() {
    return this.animate() + ', it is a ' + this.model;
  }
}
// var myProtAnimation = new Animation("Protien")
var myAnims = [];
function createMolecule() {

  // Create element:
  const element = document.createElement("div");
  element.innerHTML = "This ";
  // Append to another element:
  document.querySelector(".holder").appendChild(element);
  var t = Math.round(Math.random(100) * 100)
  console.log("pkp timechange: ~ createMolecule ~ t:" + t)
  element.style.position.x = t + "px"
  element.classList.add("anim");
  element.classList.add("red");


  var myProtAnimation = anime({
    targets: ['.anim'],
    keyframes: pk,
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    autoplay: true,
    loop: true
  });
  myAnims.push(myProtAnimation)


}


function removeAnimations(callee) {
  const runningAnims = anime.running;
  while (runningAnims.length > 0) { runningAnims.pop(); }
}
// var myProtein = new Protein("Ford", "Mustang");
// console.log("pkp timechange: ~  myProtein.show():", myProtein.show())

let cBtn = document.querySelector('.create')
cBtn.onclick = function (ev) {
  console.log("pkp timechange: ~ ev:", ev)
  createMolecule()

}
document.querySelector('.play').onclick = function (params) {
  myProtAnimation.play()
};
document.querySelector('.pause').onclick = function (params) {
  myProtAnimation.pause()
};
