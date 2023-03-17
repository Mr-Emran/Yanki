AOS.init({
    disable: false,
});

new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let doc = document

let menu_btn = doc.querySelector('.burger-menu')
let menu_activ = doc.querySelector('.menu_activ')
let menu_btn2 = doc.querySelector('.bttn')
let body = doc.querySelector('body')

let change = () =>{
menu_activ.style = "transform: translateX(0)"
body.style.overflow = 'hidden'
}
let change2 = () =>{
    menu_activ.style = "transform: translateX(-400px)"
    body.style.overflow = 'auto'
}

menu_btn.addEventListener('click',change)
menu_btn2.addEventListener('click',change2)



let yakar1 = doc.querySelector('.wrap-center')
let link1 = doc.querySelector('.link1')
let link2 = doc.querySelector('.link2')
let link3 = doc.querySelector('.link3')
let wn = window.pageYOffset
console.log(wn);


function scrl() {
    event.preventDefault()
    window.scrollTo({
        top: 700 + 80,
        left:0,
        behavior: "smooth"
    })
}


let reklama = doc.querySelector('.reklama')

function scrl2() {
    event.preventDefault()
    window.scrollTo({
        top: 1400 + 10,
        left:0,
        behavior: "smooth"
    })


}





link1.addEventListener("click", scrl)

link2.addEventListener("click", scrl)


link3.addEventListener("click", scrl2)
window.onscroll = () => {
    if(window.scrollY > 281 ){
        reklama.style = 'transform: translateX(0)'
        setTimeout(() => {
            reklama.style = 'transform: translateX(-1000px)'
        }, 3000);
    }else {
       reklama.style = 'transform: translateX(-1000px)'
    }
}





// let ad = doc.querySelector('.ad')
// document.addEventListener('scroll', () => {
//     windCoord = window.scrollY
//     if(header.clientHeight - 100 < windCoord) {
//         nav.style = 'background:white;'
//         for(let elem of changeColor) {
//             elem.style = 'color:pink; font-weight:bold;'
//         }
//         ad.style.transform = 'translateX(0%)'
//         setTimeout(closeAd, 3000)
//     }else {
//         for(let elem of changeColor) {
//             elem.style = 'color:white; font-weight:400;'
//         }
//         nav.style = 'background:none;'
//     }
// })



// let adClose = doc.querySelector('.ad__close')
// function closeAd () {
//     ad.style.transform = 'translateX(150%)'
//     setTimeout(() => {
//         ad.style.display = 'none'
//     }, 301)
    
// }
// adClose.addEventListener('click', closeAd)