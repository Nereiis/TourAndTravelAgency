let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let loginForm = document.querySelector('.login-form-container');

let menuBtn = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');   
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');  
    formClose.classList.add('fa-times');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');  
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})