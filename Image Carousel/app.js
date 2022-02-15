const imgs=document.querySelectorAll('img')
const imgContainer=document.querySelector('.imgContainer')

let i=0
function runCarousel() {
    imgContainer.style.transform=`translateX(${-(i%imgs.length)*500}px)`
    i++;
    
}
setInterval(() => {
    runCarousel()
}, 2000);
runCarousel()
console.log(imgContainer);