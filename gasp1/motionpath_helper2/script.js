//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

gsap.set(".anim", { scale: 0.5, autoAlpha: 1 });

// gsap.to(".anim", {
//   duration: 5,
//   ease: "power1.inOut",
//   immediateRender: true,
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: 90
//   }
// });

MotionPathHelper.create(".anim");

function go() {

  var randomNumX = gsap.utils.random(50, 90),
    randomNumY = gsap.utils.random(0, 150),
    randStagger = gsap.utils.random([-0.5, 0.5]),
    randDur = gsap.utils.random(0.5, 3);

  var action = gsap.to(".anim", {
    motionPath: {
      // path:[ {x:260, y:90}, {x:115, y:90},{x:110, y:130}],
      path: getPath(0, "from motion path"),
      align: "#path",
      align: "#path",
      curviness: 2
    },
    duration: randDur,
    stagger: randStagger,
    delay: 1
    // ,onComplete:go
  })

  // if (chanceNow(60)) {
  //   codeRED();
  // }

  // if (chanceNow(75)) {
  //   turn();
  // }
  return action;
};

function getPath(seqNo, callee) {
  console.log("🚀 ~ getPath ~ callee:", callee)
  let paths = document.querySelector("#path");
  console.log("🚀 ~ getPath ~ paths:", paths)
  let pathPoints = MotionPathPlugin.getRawPath(paths);
  console.log("🚀 ~ getPath ~ pathPoints:", pathPoints)

  return [{ x: 260, y: 90 }, { x: 115, y: 90 }, { x: 110, y: 130 }]

}

var master = gsap.timeline();
master
  // .add(simple,"+=2")
  // .add(bezierMotionPath,"+=2")   // delay:2  ??
  // .set(boxes,{autoAlpha:1, delay:2})  // , onComplete:go
  .add(step1)
  .add(step2)
  .add(step3,"+=5")


function step1() {
  let tl = gsap.timeline();
  tl.to(".anim", {
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
  return tl;
}

function step2() {
  let tl = gsap.timeline();
  tl.to(".anim", {
    duration: 5,
    ease: "power1.inOut",
    immediateRender: true,
    motionPath: {
      path: getPath(0,"step 2"),
      align: getPath(1,"step 2"),
      alignOrigin: [0.5, 0.5],
      autoRotate: 90
    }
  });
  return tl;
}

function step3() {
   let tl = gsap.timeline();
   var randomNumX = gsap.utils.random(50, 160),
      randomNumY = gsap.utils.random(200, 310),
      randStagger = gsap.utils.random([-0.5, 0.5]),
      randDur = gsap.utils.random(0.5, 3);
      let paths = document.querySelector("#path");
      console.log("🚀 ~ getPath ~ paths:", paths)
      let pathPoints = MotionPathPlugin.getRawPath(paths);
      console.log("🚀 ~ getPath ~ pathPoints:", pathPoints)
      
  // tl.fromTo(".anim", {
  //   duration: 3,
  //   immediateRender: true,
  //   motionPath: {
  //     path: [ {x:116, y:176}, {x:randomNumX, y:randomNumY}],
  //     align: "#path",
  //     alignOrigin: [0.5, 0.5],
  //     autoRotate: 90
  //   }
  // });
  tl.fromTo(".anim", {
      x: 116
      , y: 176
  }, {
      x: randomNumX
      , y: randomNumY,
      stagger:randStagger,
      duration: 5,
  })
  return tl;
  return tl;
}

// var tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } });
// tl.to(".class1", { x: "50vw" }) //child tweens will inherit the duration and from the parent timeline!
//   .to(".class2", { x: "25vw" })
//   .to(".class3", { x: "80vw", rotation: -180 });
