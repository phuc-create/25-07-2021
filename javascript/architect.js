const hamburger = document.getElementById('hamburger');
const scale = document.getElementById('scale');
const nav = document.querySelector('nav');
const Btnclose = document.getElementById('close');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('scale');
    nav.classList.toggle('active');
})
scale.addEventListener('mouseover', () => {
        Btnclose.style.display = 'flex';
    })
    /*Btnclose.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('scale');
    })*/