var myMolProtien = anime({
  targets: ['.blue', '.green'],
  translateX: '13rem',
  rotate: 180,
  borderRadius: '8px',
  duration: 3000,
  loop: true
});

var myMolProtien2 = anime({
  targets: ['.blue', '.green'],
  keyframes: [
    { translateY: -40 },
    { translateX: 250 },
    { translateY: 40 },
    { translateX: 0 },
    { translateY: 0 }
  ],
  duration: 2000,
  // easing: 'easeOutElastic(1, .8)',
  loop: true
});
myMolProtien2.pause();
// myMolProtien.pause()