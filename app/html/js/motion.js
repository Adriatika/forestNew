
const OPTS = {
  fill:           'none',
  className: 'moFig',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  duration:       500,
  left: 0,        top: 0,
  easing: 'cubic.out'
};

const circle1 = new mojs.Shape({
  ...OPTS,
  stroke:         'cyan',
});

let body = document.querySelector("body");

body.addEventListener("click", function (e) {
  circle1.tune({

    x: e.pageX,
    y: e.pageY,
  }).replay();
});
