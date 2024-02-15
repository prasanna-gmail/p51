
let tls = []
let path1 = [
    { x: 200, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 300 }
]
function createMolecule(molName, counts) {

    /**
     * create div element and add to dom
     * and add class to it
     * animate it
     */
    console.log("pkp timechange: ~ createMolecule ~ molName:", molName)

    var tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } });
    tl.to(".class1", { x: "50vw", y: 200 }) //child tweens will inherit the duration and from the parent timeline!
        .to(".class2", { x: "25vw", y: 200 })
        .to(".class3", { x: "80vw", y: 200, rotation: -180 });

    tls.push(tl)


}



// dissolve
// delete
// group animation

createMolecule("p", 4)
// let arrayP = []
// for (let index = 0; index < arrayP.length; index++) {
//     const element = arrayP[index];

// }