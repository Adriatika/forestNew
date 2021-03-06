let opacity = 1;
let arrow = ''
let bottom = ''
let blc = document.querySelector('#scroll')

function extend() {
  arrow = document.querySelector('.mainPageWrapper-part1__rightArrowDown')
  blc.removeEventListener('wheel', check)
  arrow.style.display = 'none'
  blc.scrollTop = blc.scrollHeight - blc.clientHeight;
}

function scrollWatch() {
  arrow = document.querySelector('.mainPageWrapper-part1__rightArrowDown')
  blc.addEventListener('wheel', check, {passive: true})
}

function check(event) {
  if(event.deltaY > 0) {
    arrow.style.opacity = `${opacity}`
    if(opacity > 0) {
      opacity -= 0.3
    } else {
      arrow.style.display = 'none'
      opacity = 0
      blc.removeEventListener('wheel', check)
    }
  } else {
    arrow.style.opacity = `${opacity}`
    if(opacity < 1) {
      opacity += 0.3
    } else {
      opacity = 1
    }
  }
}

if(blc) {
	document.addEventListener('DOMContentLoaded', scrollWatch)
}

document.addEventListener('DOMContentLoaded', slider)
function slider() {
  let movingPictures1 = new Swiper('#movingPicturesOne', {
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#movingPicturesOneTopArrowRight',
      prevEl: '#movingPicturesOneTopArrowLeft',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }
  });
  let movingPictures2 = new Swiper('#movingPicturesTwo', {
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#movingPicturesTwoTopArrowRight',
      prevEl: '#movingPicturesTwoTopArrowLeft',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }
  });
  let movingPicturesBigOne = new Swiper('#movingPicturesBigOne', {
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#movingPicturesBigOneTopArrowRight',
      prevEl: '#movingPicturesBigOneTopArrowLeft',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 5,
      },
    }
  });
  let movingPicturesBigTwo = new Swiper('#movingPicturesBigTwo', {
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#movingPicturesBigTwoTopArrowRight',
      prevEl: '#movingPicturesBigTwoTopArrowLeft',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 5,
      },
    }
  });
  let mySwiper2 = new Swiper('#sliderMini', {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#sliderMini__ArrowRight',
      prevEl: '#sliderMini__ArrowLeft',
    },
  });
  let mySwiper3 = new Swiper('.mainPageWrapper-part6__sliderBot', {
    spaceBetween: 20,
    slidesPerView: 1.2,
    loop: false,
    navigation: {
      nextEl: '#mainPageWrapper-part6__sliderTopArrowRight',
      prevEl: '#mainPageWrapper-part6__sliderTopArrowLeft',
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
      },
			768: {
				slidesPerView: 3,
			},
      1280: {
        slidesPerView: 4,
      },
    }
  });
  let mySwiper4 = new Swiper('#partners-slider', {
    spaceBetween: 87,
    slidesPerView: 1.5,
    loop: false,
    navigation: {
      nextEl: '#partners-slider__sliderTopArrowRight',
      prevEl: '#partners-slider__sliderTopArrowLeft',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }
  });
}

function openModal() {
  let modal = document.querySelector('.modalSubscription')
  modal.style.display = 'block'
  let j = 0;
  for(let i = 0; i < 1; i+=0.1) {
    setTimeout(() => {
      modal.style.opacity = `${i}`
    }, j)
    j+= 25;
  }
}

function closeModal() {
  let modal = document.querySelector('.modalSubscription')

  modal.style.display = 'none'
  modal.style.opacity = '0'
}

let arrowUp= ''
let getArrowUpObj = {
	on: function () {
		arrowUp.style.display = 'flex'
		setTimeout(() =>arrowUp.classList.add('visible'), 500)
	},
	off: function () {
		arrowUp.classList.remove('visible')
		setTimeout(() =>arrowUp.style.display = '', 500)
	},
	getArrowUp: function () {
		arrowUp = document.querySelector('.listedUp')
		document.addEventListener('scroll', getArrowUpObj.onScroll)
	},
	onScroll: function () {
		if(pageYOffset > 700) {
			if(!arrowUp.classList.contains('visible')) {
				getArrowUpObj.on()
			}
		} else if(pageYOffset < 400) {
			if(arrowUp.classList.contains('visible')) {
				getArrowUpObj.off()
			}
		}
	},
	toUp: function () {
		document.removeEventListener('scroll',getArrowUpObj.onScroll)
		getArrowUpObj.off()
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setTimeout(() => document.addEventListener('scroll', getArrowUpObj.onScroll), 2000)
	},
}
if(document.documentElement.clientWidth > 768) {
	document.addEventListener('DOMContentLoaded', getArrowUpObj.getArrowUp)
}
