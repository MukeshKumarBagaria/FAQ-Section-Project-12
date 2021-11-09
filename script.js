const btn=document.querySelectorAll('.faq-toggle')
const faq=document.querySelectorAll(".faq")
console.log(btn);
btn.forEach(btn=>{
btn.addEventListener('click',()=>{
btn.parentNode.classList.toggle('active')
})
})