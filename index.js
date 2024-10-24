let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });
    slides[index].classList.add('active');
    slides[index].style.opacity = '1';
    document.querySelector('.carousel-slider').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Otomatik geçiş
setInterval(() => {
    nextSlide();
}, 30000); // Her 3 saniyede bir geçiş
// Menü açma ve kapatma işlemleri
const sideMenu = document.getElementById('side-menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

// Menü butonuna tıklandığında menüyü aç
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

// Kapatma butonuna tıklandığında menüyü kapat
closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let scrollAmount = 0;
const slideItemWidth = document.querySelector('.slide-item').clientWidth; // Slide genişliği
const totalItems = document.querySelectorAll('.slide-item').length;
const itemsPerGroup = 1; // Mobilde her grupta 1 öğe
const totalGroups = Math.ceil(totalItems / itemsPerGroup); // Toplam grup sayısı

// Otomatik oynatma ayarları
let autoplayInterval = setInterval(() => {
    // Eğer son gruptaysak, kaydırma yapma
    if (scrollAmount >= (totalGroups - 5) * slideItemWidth) {
        scrollAmount = 0; 
    } else {
        scrollAmount += slideItemWidth+25; 
    }
    
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}, 2500); 




