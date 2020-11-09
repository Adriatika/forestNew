function extend() {
  blc = document.querySelector('#scroll')
  arrow = document.querySelector('.mainPageWrapper-part1__rightArrowDown')
  blc.removeEventListener('wheel', check)
  arrow.style.display = 'none'
  blc.scrollTop = blc.scrollHeight - blc.clientHeight;
}

function scrollWatch() {
  blc = document.querySelector('#scroll')
  arrow = document.querySelector('.mainPageWrapper-part1__rightArrowDown')
  blc.addEventListener('wheel', check)
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

let opacity = 1;
let arrow = ''
let bottom = ''
let blc = ''
document.addEventListener('DOMContentLoaded', scrollWatch)




document.addEventListener('DOMContentLoaded', slider)

function slider() {
  let mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    slidersPerView: 1,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '#mainPageWrapper-part1__sliderTopArrowRight',
      prevEl: '#mainPageWrapper-part1__sliderTopArrowLeft',
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
      },
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
}
