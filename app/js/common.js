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


//catalog btn

let catalogBtn = [...document.querySelectorAll('.catalog-btn')];

function catalogControl() {
    if (catalogBtn.length) {
        catalogBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.catalog-cont').classList.toggle('open');
            })
        })
    }
}

catalogControl();

//catalog btn

//custom select

$(document).ready(function() {
    if (document.querySelector('.select-cont select')) {
        $('.select-cont select').niceSelect();
    }

});

//custom select

//account btn

let accountBtn = [...document.querySelectorAll('.account .acc')];

function accountBlock() {
    if (accountBtn.length) {
        accountBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.account').classList.toggle('open');
            })
        })
    }
}

accountBlock();

//account btn
//anim

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



let productsGroup = [...document.querySelectorAll('.products-group')];

function startProductGroup() {
    if (!productsGroup.length) {

    } else {


        productsGroup.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 20,
                breakpoints: {
                    1050: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    850: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    650: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }



            });


        })

    }
}

startProductGroup();


let newsGroup = [...document.querySelectorAll('.news-section__cont')];

function startNewsGroup() {
    if (!newsGroup.length) {

    } else {


        newsGroup.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 23,
                breakpoints: {
                    1050: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    850: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    650: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }



            });


        })

    }
}

startNewsGroup();

let productGallery = [...document.querySelectorAll('.product-gallery')];

function startGallery() {
    if (!productGallery.length) {

    } else {


        productGallery.forEach((sld) => {
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
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 23,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },



            });


        })

    }
}

startGallery();

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

                if (window.innerWidth > 768) {
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
                }

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

//rating control

let quantButton = [...document.querySelectorAll('.product-amount .quantity__button')];

function upValueQuant() {
    if (!quantButton.length) {

    } else {
        quantButton.forEach((btn) => {
            btn.querySelector('button').addEventListener('click', () => {
                if (btn.classList.contains('quantity__button--minus')) {
                    let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;
                    if (Number(val) === 0) {

                    } else {
                        let newVal =    Number(val) - 1;
                        btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;
                    }


                } else {
                    let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;

                    let newVal =    Number(val) + 1;
                    btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;

                }
            })
        })
    }
}
upValueQuant();


function getRaty() {
    $('.rating-stars').each(function( index ) {
        if($(this).html() == '') {
            $(this).raty({
                readOnly: true,
                starHalf: './img/star-full.svg',
                starOn: './img/star-full.svg',
                starOff: './img/star-clear.svg',
                hints: ['a', null, '', null, '', null]
            });
        }
    });
}

getRaty();


let startsRateModal = [...document.querySelectorAll('.rate .sg-rate')];

function hoverStarsRate(startsRateModal) {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            });
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            });
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                });
                st.classList.add('clicked');
                st.closest('.form-comment').querySelector('.rating-input input').value = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}


hoverStarsRate(startsRateModal);


//rating control

//product-description

let prodDesc = [...document.querySelectorAll('.product-description')];

function controlProdDesc() {
    if (prodDesc.length) {
        prodDesc.forEach((btn) => {
            btn.querySelector('.opener').addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}
controlProdDesc();
//product-description

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...btn.closest('.tab-cont').querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs


//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq




