const toggle=document.getElementById('toggle');
const toggleBtn=document.getElementById('toggle-btn')
const labelDiv=document.getElementById('label-div');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    toggleBtn.classList.toggle('active')
    labelDiv.classList.toggle('active')
})