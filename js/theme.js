function setTheme(themeName) { // how is this being set? 
    console.log(themeName);
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.log('setTheme: ' + themeName);
}

 let themeToggle = document.querySelector('.theme-select');
 themeToggle.addEventListener('click', toggleTheme);

// toggle between light and dark theme
function toggleTheme() {
    console.log('toggleTheme');
   if (localStorage.getItem('theme') === 'theme-dark'){
       let labelThemeSelect = document.getElementById('label-theme-dark');
       setTheme('theme-dark');
       labelThemeSelect.innerHTML = '<i class="fas fa-moon></i>Dark Mode';
       console.log(labelThemeSelect);
   } else {
    labelThemeSelect.innerHTML = '';
       setTheme('theme-light');
       labelThemeSelect.innerHTML = '<i class="fas fa-sun></i>Light Mode';
       console.log(labelThemeSelect);
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        document.getElementById('theme-select').checked = false;
        console.log(localStorage);
    } else {
        setTheme('theme-dark');
        document.getElementById('theme-select').checked = true;
        console.log(localStorage);
    }
 })();
