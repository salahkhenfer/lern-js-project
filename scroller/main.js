// this my sultion
let el = document.querySelector(".scroller")
let hight = document.documentElement.scrollHeight - document.documentElement.clientHeight
window.addEventListener("scroll",()=> {
const scroltop = document.documentElement.scrollTop
el.style.width =`${(scroltop / hight ) * 100}%`
})
