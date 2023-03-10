AOS.init({
    disable: false,
})

new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

let doc = document

let menu_btn = doc.querySelector('.burger-menu')
let menu_activ = doc.querySelector('.menu_activ')
let menu_btn2 = doc.querySelector('.bttn')
let body = doc.querySelector('body')

let change = () =>{
menu_activ.style = "transform: translateY(0)"
body.style.overflow = 'hidden'
}
let change2 = () =>{
    menu_activ.style = "transform: translateY(-300px)"
    body.style.overflow = 'auto'
}

menu_btn.addEventListener('click',change)
menu_btn2.addEventListener('click',change2)