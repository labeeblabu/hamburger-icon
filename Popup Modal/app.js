const opens =document.getElementById("btn");
const closes=document.getElementById("popupClose")
const container = document.getElementById('container')
opens.addEventListener("click",()=>{
    container.classList.add('active')
})
closes.addEventListener('click',()=>{
    container.classList.remove('active')
})