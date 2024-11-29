document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('slider');
    const slides = [
        "img/lol2.png",
        "img/11.jpg"
    ];
    let currentSlide = 0;
    const changeSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        slider.style.background = `url('${slides[currentSlide]}')no-repeat center, #000`;
    };
    setInterval(changeSlide, 3000);
});
