function createMolecule(molName, counts) {

    var target = document.createElement("div");
    target.classList.add(animClass);
    target.classList.add("protein");
    document.body.appendChild(target);

    var target2 = document.createElement("div");
    target2.classList.add(animClass);
    target2.classList.add("amino");
    document.body.appendChild(target2);

    var target3 = document.createElement("div");
    target3.classList.add(animClass);
    target3.classList.add("fiber");
    document.body.appendChild(target3);



    let tw1 = gsap.to(target, {
        x: function (ctr) {
            var repeatCount = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
            return ps[repeatCount].x
        }
        , y: function (ctr) {
            var repeatCountY = Math.floor(tw1.totalTime() / (tw1.duration() + tw1.repeatDelay()));
            return ps[repeatCountY].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur
    })

    // tw1.to(target, { x: 0 })
    let tw2 = gsap.to(target2, {
        x: function (ctr) {
            var repeatCountX2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return ps[repeatCountX2].x
        }
        , y: function (ctr) {
            var repeatCountY2 = Math.floor(tw2.totalTime() / (tw2.duration() + tw2.repeatDelay()));
            return ps[repeatCountY2].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur
    })
    let tw3 = gsap.to(target3, {
        x: function (ctr) {
            var repeatCountX3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return ps[repeatCountX3].x
        }
        , y: function (ctr) {
            var repeatCountY3 = Math.floor(tw3.totalTime() / (tw3.duration() + tw3.repeatDelay()));
            return ps[repeatCountY3].y
        }
        , repeat: ps.length - 1
        , repeatRefresh: true
        , duration: dur

    })
    // tw.delay(0.1);
    tw2.delay(0.1);
    tw3.delay(0.2);

    // tl.add(tw2, "<+=1");
    // tl.add(tween);


}

btn.addEventListener("click", createMolecule);

