document.addEventListener("DOMContentLoaded", function() {
    var h3 = document.querySelector('.hero-text h3');
    var h1 = document.querySelector('.hero-text h1');
    var h4 = document.querySelector('.hero-text h4');
    
    h3.classList.add('show');
    h1.classList.add('show');
    h4.classList.add('show');
});
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("Sticky",window.scrollY>200)
});


// JavaScript code to handle smooth scrolling
// Select all anchor tags with href starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener to each anchor tag
    anchor.addEventListener('click', function (e) {
        // Prevent default link behavior
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll to the target section smoothly
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');
    const images = [
        "images/mukuro.jpg",
        "images/zekai.jpg",
        "images/undertak.jpg",
        "images/atsushi.jpg",
        "images/ulqiorra.jpg",
        "images/haise.jpg"
    ];

    options.forEach(option => {
        option.addEventListener('click', function () {
            // Remove active class from all options
            options.forEach(opt => opt.classList.remove('active'));

            // Add active class to the clicked option
            this.classList.add('active');

            // Change the image source based on the index of the clicked option
            document.querySelector('.grid-wrapper').children[index].querySelector('img').src = images[index];
        });
    });
});

function showLatestImages() {
    const images = [
        "images/mukuro.jpg",
        "images/zekai.jpg",
        "images/undertak.jpg",
        "images/atsushi.jpg",
        "images/ulqiorra.jpg",
        "images/haise.jpg"
    ];

    const imageContainers = document.querySelectorAll('.image');
    imageContainers.forEach((container, index) => {
        container.querySelector('img').src = images[index % images.length];
    });
}

function showDarkImages() {
    const images = [
        "images/ouran.jpg",
        "images/bya.jpg",
        "images/armin.jpg",
        "images/dazai.jpg",
        "images/xanxus.jpg",
        "images/himuro.jpg"
    ];
    const imageContainers = document.querySelectorAll('.image');
    imageContainers.forEach((container, index) => {
        container.querySelector('img').src = images[index % images.length];
    });
}

function showSteertImages (){
    const images = [
        "images/shu.jpg",
        "images/lamud.jpg",
        "images/gintoki.jpg",
        "images/sanzu.jpg",
        "images/shoto.jpg",
        "images/hibari.jpg"
    ];
    const imageContainers = document.querySelectorAll('.image');
    imageContainers.forEach((container, index) => {
        container.querySelector('img').src = images[index % images.length];
    });
}

function showOtherImages (){
    const images = [
        "images/eren.jpg",
        "images/ki.jpg",
        "images/childe.jpg",
        "images/ju.jpg",
        "images/aiku.jpg",
        "images/rin.jpg"
    ];
    const imageContainers = document.querySelectorAll('.image');
    imageContainers.forEach((container, index) => {
        container.querySelector('img').src = images[index % images.length];
    });
}



window.addEventListener('load', function() {
    var audio = document.getElementById('bg-music');
    audio.volume = 0.5; // ตั้งค่าระดับเสียง
    audio.play();
  });
  


