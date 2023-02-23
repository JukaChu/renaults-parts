

var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//anim

//scrolling bg

let scrollingBg = [...document.querySelectorAll('.scrolled-bg')];

function scrollParallaxBg() {
    if (scrollingBg.length) {
        scrollingBg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            console.log(h);

            if (toTop < 0) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / h) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxBg();


//scrolling bg

//scrolling img

let scrollingImg = [...document.querySelectorAll('.scrolled-img')];

function scrollParallaxImg() {
    if (scrollingImg.length) {
        scrollingImg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let w = window.innerHeight;
            // console.log(w);
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            // console.log(h);

            if (toTop < w) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / w) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxImg();

$(window).scroll(function (e) {

    scrollParallaxBg();
    scrollParallaxImg();
});

//scrolling img


//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();



var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//

//anim



var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');

// var backdrop = document.querySelector('.backdrop');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//chars hovering


let progressBtns = [...document.querySelectorAll('.menu li a')];

function goToSectionProg() {
    if (progressBtns.length) {
        progressBtns.forEach((btn) => {
            let numb = btn.dataset.prog;
            if (numb) {
                let el = document.querySelector(`section[data-sec="${numb}"]`);
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    document.body.classList.remove('no-scroll');
                    burger.forEach((br) => {
                        br.classList.remove('active');
                    });
                    header.classList.remove('active');
                    if (window.innerWidth < 768) {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(el).offset().top - 50
                        }, 500);
                    } else {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(el).offset().top - 100
                        }, 500);
                    }

                })
            }

        })
    }
}

goToSectionProg();

const sections = document.querySelectorAll(".page-section");

// Add an event listener listening for scroll

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - (sectionHeight / 2.5);
        sectionId = current.dataset.sec;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            console.log(sectionId);

            [...document.querySelectorAll(".menu li a")].forEach((bts, k) => {
                if (k === (sectionId - 1)) {
                    bts.classList.add('active');
                } else {
                    bts.classList.remove('active');
                }
            })
        }
    });
}




function progressBarScrollFull() {
    if (document.querySelector(".full-progress p")) {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.querySelector(".full-progress p").style.width = scrolled + "%";
    }

}

window.onscroll = function () {
    navHighlighter();
    progressBarScrollFull()
};

progressBarScrollFull();

let homeBanner = [...document.querySelectorAll('.companies-list')];

function startHomeBanner() {
    if (!homeBanner.length) {

    } else {


        homeBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                centeredSlides: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 0,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'single-dot',
                    bulletActiveClass: 'active',
                }


            });


        })

    }
}

startHomeBanner();




//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                burger.forEach((br) => {
                    br.classList.remove('active');
                });
                header.classList.remove('active');

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-video')) {
                            mod.querySelector('iframe').src = btn.dataset.link;
                        }
                    }
                })
            })
        });
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');

                })
            });
        }
    }
}

controlModal();

//modal windows




