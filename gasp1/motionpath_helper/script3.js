//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);
gsap.set(".astronaut", { scale: 0.5, autoAlpha: 1 });

/**
 * BO Part random in a path
 * https://gsap.com/docs/v3/Plugins/MotionPathPlugin/
 */

gsap.to(".astronaut", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        // offsetX: 112,
        // offsetY: 112,
        curviness: 0,
        autoRotate: 90
    },
    transformOrigin: "10% 150%",
    duration: 5,

    // resolution: 2,
    relative: true,
    ease: "power3.in",
});

MotionPathHelper.create(".astronaut");


/**
 * EO Part 3
 */