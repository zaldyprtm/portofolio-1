var searchButton = document.querySelector('nav .desktop-nav .link-search');
var closeButton = document.querySelector('.search-container .link-close');
var desktopNav = document.querySelector('.desktop-nav');
var searchContainer = document.querySelector('.search-container');
var overlay = document.querySelector('.overlay');


if(searchButton){
searchButton?.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    searchContainer.classList.remove('hide');
    overlay.classList.add('show');
})}

if(closeButton){
closeButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    searchContainer.classList.add('hide');
    overlay.classList.remove('show');
})
}
if(overlay){
overlay.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    searchContainer.classList.add('hide');
    overlay.classList.remove('show');
})
}
// mobile version

var menuIconContainer = document.querySelector('nav .menu-icon-container');
var navContainer = document.querySelector('.nav-container');

if(menuIconContainer){
menuIconContainer.addEventListener('click', () => {
    navContainer.classList.toggle('active');
})
}
var searchbar = document.querySelector('.mobile-search-container .search-bar');
var nav = document.querySelector('.nav-container nav');
var searchInput = document.querySelector('.mobile-search-container input');
var cancelBtn = document.querySelector('.mobile-search-container .cancel-btn');

if(searchInput){

searchInput.addEventListener('click', () => {
    searchbar.classList.add('active');
    nav.classList.add('move-up');
    desktopNav.classList.add('move-down');

})
}
if(cancelBtn){
cancelBtn.addEventListener('click', () => {
    searchbar.classList.remove('active');
    nav.classList.remove('move-up');
    desktopNav.classList.remove('move-down');
})
}

// carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)  {
        showSlides(slideIndex += n);
}


function showSlides(n)  {
    var i;
    let slides = document.getElementsByClassName("img-slide");
    
    if (n > slides.length) {slideIndex = 1}
   else if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block';
}

setInterval(() =>   {
    plusSlides(1);
}, 2000);