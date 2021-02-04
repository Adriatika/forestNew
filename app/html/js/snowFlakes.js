let body = document.querySelector('body');
let div  = document.querySelector('.flakesDiv');
let height = div.clientHeight;
let width = body.clientWidth - 70;
let flake = 0;

function addFlake() {
    setInterval(() => {
        let randSpeed = Math.floor(Math.random() * ((height / 20) - (height / 15)) + (height / 15)) / 4;
        let left = Math.random() * width;
        div.insertAdjacentHTML('afterbegin', `<div id='flake-${flake}' style="position: absolute; top: 0px; left: ${left}px; z-index: 50; transition: top ${randSpeed}s, left 2s; transition-timing-function: linear"><img height="50px" width="50px" src="../img/flakes1.png"></div>`)
        fall(`#flake-${flake}`, randSpeed)
        flake++;
    }, 600)


    function fall(e, speed) {
        let item = document.querySelector(e);
        setTimeout(() => item.style.top= height + 'px', 100)


        setTimeout(() => {
            item.remove();
        }, speed * 1000)
        gsap.to(e, {
            y: height,
            duration: speed,
            onComplete: deleteSnow,
            ease: 'none',
        });
        gsap.to(e, {
            duration: 10,
            rotation: 360,
            rotationX: 360,
            rotationY: 360,
            repeat: -1,
        });
        gsap.to(e, {
            duration: 3,
            x: "random(-50, 50)",
            yoyo: true,
            // reversed: true,
            repeat: -1,
        });

        function deleteSnow() {
            document.querySelector(e).remove()
        }
    }
}

addFlake()