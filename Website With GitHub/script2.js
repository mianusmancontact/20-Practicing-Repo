// 1. Locate the button in our HTML document
const toggleButton = document.getElementById('theme-toggle');

// 2. CHECK ON LOAD: Did the user choose dark mode in a past visit?
const savedTheme = localStorage.getItem('dashboard-theme');

if (savedTheme === 'dark') {
    // If they previously chose dark, apply the class immediately on load
    document.body.classList.add('dark-theme');
    toggleButton.textContent = '☀️ Light Mode';
} else {
    // Otherwise, keep the default light theme active
    toggleButton.textContent = '🌙 Dark Mode';
}

// 3. LISTEN FOR CLICKS: Keep tracking user changes
toggleButton.addEventListener('click', () => {
    // Toggle the class on the body tag
    document.body.classList.toggle('dark-theme');
    
    // Check if the dark theme is active right now after the click
    const isDarkNow = document.body.classList.contains('dark-theme');
    
    if (isDarkNow) {
        toggleButton.textContent = '☀️ Light Mode';
        // 💾 SAVE: File away "dark" inside the browser's memory cabinet
        localStorage.setItem('dashboard-theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
        // 💾 SAVE: File away "light" inside the browser's memory cabinet
        localStorage.setItem('dashboard-theme', 'light');
    }
});
