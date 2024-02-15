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

MotionPathHelper.create(".astronaut");


// var tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } });
// tl.to(".class1", { x: "50vw" }) //child tweens will inherit the duration and from the parent timeline!
//   .to(".class2", { x: "25vw" })
//   .to(".class3", { x: "80vw", rotation: -180 });
