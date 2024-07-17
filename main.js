// change navbar style on scroll 

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//show/hide faq answer 

const faq = document.querySelectorAll('.faq');
faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon 

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus";
        }

    })
})
 
//nav

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


//slider


const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

const slideCount = slides.length;
let activeSlide = 0;

setInterval(() => {
slides[activeSlide].classList.remove('active');
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
}, 3000);
