const menuList = document.getElementById('menulist');
const navMenuButton = document.getElementById('navmenu');

// Function to toggle menu visibility
function toggleMenu() {
    if (window.innerWidth <= 920) {
        // For screens 920px and below, toggle menu visibility
        menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    }
}

// Event listener for the menu button
navMenuButton.addEventListener('click', toggleMenu);

// Event listener for the close button inside the dropdown
document.querySelector('.close-button').addEventListener('click', function() {
    menuList.style.display = 'none';
});

// Hide menu when resizing the window
window.addEventListener('resize', function() {
    if (window.innerWidth > 920) {
        menuList.style.display = 'none'; // Hide menu if visible
    }
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    if (!menuList.contains(event.target) && !navMenuButton.contains(event.target)) {
        menuList.style.display = 'none';
    }
});
