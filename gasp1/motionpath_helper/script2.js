//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

gsap.set(".astronaut", { scale: 0.5, autoAlpha: 1 });

gsap.to(".astronaut", {
    duration: 5,
    ease: "power1.inOut",
    immediateRender: true,
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    }
});

let paths = document.querySelector("#path");
console.log("pkp timechange: ~ paths:", paths)

let pathPoints = MotionPathPlugin.getRawPath(paths);
console.log("pkp timechange: ~ pathPoints:", pathPoints)

MotionPathHelper.create(".astronaut");




/**
 * BO Part 2
 */

let anchors = [{ x: 50, y: 130 }, { x: 300, y: 10 }, { x: 510, y: 100 }, { x: 700, y: 190 }, { x: 850, y: 100 }], // anchor coordinates (feel free to change these if you want)
    rawPath = MotionPathPlugin.arrayToRawPath(anchors, { curviness: 0.5 }),
    path = document.querySelector("#path"),
    svg = document.querySelector("#svg");

path.setAttribute("d", MotionPathPlugin.rawPathToString(rawPath));

// place the anchors as <circle> elements
for (let i = 0; i < anchors.length; i++) {
    createSVG("circle", svg, { cx: anchors[i].x, cy: anchors[i].y, r: 5 });
}

// animate with drawSVG
gsap.from(path, {
    drawSVG: false,
    duration: 4,
    ease: "power1.inOut"
});

// helper function for creating SVG elements
function createSVG(type, container, attributes) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", type),
        reg = /([a-z])([A-Z])/g,
        p;
    for (p in attributes) {
        element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
    }
    container.appendChild(element);
    return element;
}
/**
 * EO Part 2
 */