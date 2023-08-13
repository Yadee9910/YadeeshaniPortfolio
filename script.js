// JavaScript function to toggle academic and curriculum content visibility

function toggleContent(contentId) {
    
    var content = document.getElementById(contentId);
    console.log(content)
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

document.getElementById('menu-btn').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', function () {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    
});


