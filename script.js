// 1. Locate the toggle button in our HTML document
const toggleButton = document.getElementById('theme-toggle');

// 2. Query the user's operating system system preference
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 3. Check if they have a manually saved choice from a past visit
const savedTheme = localStorage.getItem('dashboard-theme');

// 4. DETERMINING THE INITIAL STATE
// Rule: Manual saved preference ALWAYS beats system preferences. 
// If no manual save exists, fall back to whatever their computer OS is set to.
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-theme');
    toggleButton.textContent = '☀️ Light Mode';
} else {
    document.body.classList.remove('dark-theme');
    toggleButton.textContent = '🌙 Dark Mode';
}

// 5. LISTEN FOR MANUAL OVERRIDES (Button Clicks)
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkNow = document.body.classList.contains('dark-theme');
    
    if (isDarkNow) {
        toggleButton.textContent = '☀️ Light Mode';
        localStorage.setItem('dashboard-theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('dashboard-theme', 'light');
    }
});
