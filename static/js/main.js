// SCROLL SUAVE QUANDO CLICA NO MENU
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Offset maior para seção "sobre" (hero), menor para outras
            const offset = target.id === 'sobre' ? 290 : 120;
            const offsetTop = target.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }, { passive: false });
});

// ADICIONAR CLASSE ATIVA NO MENU AO ROLAR
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// CARROSSEL
let currentSlideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

function moveSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

// Swipe para carrossel
function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        moveSlide(1); // Swipe para esquerda = próximo slide
    }
    if (touchEndX > touchStartX + 50) {
        moveSlide(-1); // Swipe para direita = slide anterior
    }
}

// Inicializar carrossel
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
    
    // Adicionar event listeners para swipe
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
});