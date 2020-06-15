function setTheme(themeName) { // this works
    localStorage.setItem('theme', themeName);
    // document.documentElement.className = themeName;
    console.log('setTheme: ' + themeName);
}

// toggle between light and dark theme
function toggleTheme() {
   const labelThemeSelect = document.getElementById('label-theme-select');
    console.log('toggleTheme');
   if (localStorage.getItem('theme') === 'theme-dark'){
    labelThemeSelect.innerHTML = '';
       setTheme('theme-light');
       labelThemeSelect.innerHTML = '<i class="fas fa-sun></i>Light Mode';
       console.log(labelThemeSelect[0]);
   } else {
    labelThemeSelect.innerHTML = '';
       setTheme('theme-dark');
       labelThemeSelect.innerHTML = '<i class="fas fa-moon></i>Dark Mode';
       console.log(labelThemeSelect[0]);
   }
}

// Immediately invoked function to set the theme to localStorage value on load
(function () { // this works
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.querySelector('.theme-dark').checked = true;
        console.log(localStorage);
    } else {
        setTheme('theme-light');
        // document.querySelector('.theme-light').checked = false;
        // console.log(localStorage);
    }
 })();

let themeToggle = document.querySelector('#checkbox-theme-select');
console.log('themeToggle: ' + themeToggle);
themeToggle.addEventListener('change', toggleTheme);