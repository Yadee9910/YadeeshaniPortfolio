// JavaScript function to toggle academic and curriculum content visibility

// function toggleContent(contentId) {
    
//     var content = document.getElementById(contentId);
//     console.log(content)
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// }

function toggleContent(contentId) {
    
    var content = document.getElementById(contentId);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}


// document.getElementById('menu-btn').addEventListener('click', function () {
//     var navbar = document.getElementById('navbar');
//     navbar.classList.toggle('active');
// });

// const menuBtn = document.getElementById('menu-btn');
// const menuIcon = document.getElementById('menu-icon');
// const navbar = document.getElementById('navbar');

// menuBtn.addEventListener('click', function () {
//     menuIcon.classList.toggle('fa-bars');
//     menuIcon.classList.toggle('fa-times');
    
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll(".navbar a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navbar.classList.remove("active"); // Close the menu
            menuIcon.classList.remove("fa-times"); // Reset the menu icon
        git git     menuIcon.classList.add("fa-bars");
        });
    });
});


