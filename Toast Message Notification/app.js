const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener('click',()=>{
    const notify=document.createElement('div')
    notify.innerText='hello!!!'
    notify.classList='notify'
    container.append(notify)

    setTimeout(() => {
        notify.remove()
    }, 2000);
})