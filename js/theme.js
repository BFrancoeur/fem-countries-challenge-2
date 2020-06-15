function setTheme(themeName) { // this runs second
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

    setThemeLabel(themeName);
}

function setThemeLabel(themeName) {
    let labelCheckbox = document.getElementById('label');
    labelCheckbox.innerHTML = '';

    if (themeName !== 'theme-light') {
        labelCheckbox.classList.add('dark')
        labelCheckbox.classList.remove('light');
        labelCheckbox.innerHTML = '<i class="fas fa-moon"></i>Dark Mode';
    } else {
        labelCheckbox.classList.add('light');
        labelCheckbox.classList.remove('dark');
        labelCheckbox.innerHTML = '<i class="fas fa-sun"></i>Light Mode';
    }
}

function toggleTheme() { // this runs last

   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
      
   } else {
       setTheme('theme-dark');
       
   }
}

let themeToggle = document.querySelector('#checkbox');

themeToggle.addEventListener('change', toggleTheme);

// Immediately invoked function to set the theme to localStorage value on load
(function () { // this runs first
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        console.log(localStorage);
    } else if ( localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        console.log(localStorage);
    }
 })();
