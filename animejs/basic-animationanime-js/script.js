// var myMolProtien = anime({
//   targets: ['.anim'],
//   translateX: '3rem',
//   rotate: 180,
//   borderRadius: '8px',
//   duration: 10000,
//   autoplay: true,
//   loop: true
// });

var myMolProtien2 = anime({
  targets: ['.anim'],
  keyframes: [
    { translateY: -40, duration: 1000 },
    { translateY: -60, duration: 1000 },
    { translateX: 15, duration: 1000, delay: 100 },
    { translateY: 20, duration: 1000, easing: 'easeInOutCirc' },
    { translateY: 120, duration: 1000 },
    { translateY: 110, duration: 1000, easing: 'easeInOutCubic' },
    { translateY: 145, duration: 1000, delay: 100 },
    { translateX: 0, duration: 1000 },
    { translateY: 0, duration: 1000 }
  ],
  duration: 1000,
  easing: 'easeOutElastic(1, .8)',
  autoplay: true,
  loop: true
});
// myMolProtien2.pause();
// myMolProtien.pause()

