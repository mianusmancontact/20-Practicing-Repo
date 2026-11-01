// 1. Locate the button in our HTML document
const toggleButton = document.getElementById('theme-toggle');

// 2. Listen closely for a user click event
toggleButton.addEventListener('click', () => {
    // 3. Inject or remove the ".dark-theme" class on the body tag
    document.body.classList.toggle('dark-theme');
    
    // 4. Update the button text so the label matches the mode
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});
