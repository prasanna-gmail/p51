
const proteins = []
const proteinCount = 5
console.log("pkp timechange: ~ sss:")
var draw = SVG().addTo('#drawing')
draw.viewbox(0, 0, 500, 600)
var rect = draw.rect(10, 100).fill('#fA6')
// var rect2 = draw.circle(20).fill('#E59')

// rect.animate().move(150, 350)
// rect2.animate().move(5, 10)


class ShpMolecule extends SVG.Shape {
    constructor(node) {
        super(SVG.nodeOrNew('rect', node), node)
    }
    sayHello(greet) {
        console.log("pkp timechange: ~ sayHello ~ greet:", greet)
    }
    size(width, height) {
        return this.attr({
            width: width
            , height: height
            , rx: height / 2
            , ry: height / 2
        })
    }
}

SVG.extend(SVG.Container, {
    Molecule: function (width, height) {
        return this.put(new ShpMolecule).size(width, height)
    }
});


// var myMol2 = draw.Molecule(18, 15).fill('#F56')

// myMol.animate().move(10, 40)
// myMol.sayHello("pppp")

for (let p = 0; p < proteinCount; p++) {
    var randomnumber = Math.floor(Math.random() * 101)
    const myp = draw.Molecule(18, 15).fill('#F65B').move(randomnumber, 30);
    console.log("pkp timechange: ~ randomnumber:", randomnumber)
    proteins.push(myp)
}
for (let ctr = 0; ctr < proteins.length; ctr++) {
    const element = proteins[ctr];
    console.log("pkp timechange: ~ element:", element)
    var randomnumber = Math.floor(Math.random() * 100 + ctr * 10)

    // element.animate().move(10 + randomnumber, 40 + randomnumber)
    // element.animate().move(100 + randomnumber, 140 + randomnumber)
    // element.animate().move(20 + randomnumber, 40 + randomnumber)

    element.animate({
        duration: 1000,
        delay: 8000,
        when: 'now',
        swing: false,
        times: 5,
        wait: 2000
    }).attr({ x: 20, y: 20, fill: '#f03' })
    element.translate(0.5, -1)


}


function animateMolecule() {

}