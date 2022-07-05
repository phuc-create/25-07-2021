const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const fas = document.querySelector('.fas');
window.addEventListener('scroll', (e) => {
    if (this.scrollY > 20) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
})
fas.addEventListener('click', () => {
    menu.classList.toggle('active');
    fas.classList.toggle('fa-bars');
    fas.classList.toggle('fa-times');

})

const btnup = document.getElementById('up-btn');

window.addEventListener('scroll', () => {
    if (this.scrollY > 200) {
        btnup.classList.add('active');
    } else {
        btnup.classList.remove('active');
    }
})
btnup.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})