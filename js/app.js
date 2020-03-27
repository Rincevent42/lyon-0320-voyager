/* Text animation in the header */

document.addEventListener('DOMContentLoaded', function () {
  const planetes = ['Arrakis', 'Pandora', 'Coruscant', 'Mars'];
  const change = document.getElementById('changeText');
  let i = 0;
  const intervalId = setInterval(function () {
    change.innerHTML = planetes[i];
    change.classList.add('slide');
    i++;
    if (i > 3) {
      i = 0;
    }
  }, 3000)
})

/* Dark mode / light mode toggleling */
function switchTheme (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode','dark');
    console.log('Dark mode set');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('darkMode','light');
    console.log('Dark mode unset');
  }
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

/* Toggle between dark and classic screen mode when page loaded
according to the value of the local storage variable 'darkMode' */
const darkMode = localStorage.getItem('darkMode');
console.log('Dark mode Local Storage variable set to : ' + darkMode);
document.documentElement.setAttribute('data-theme', darkMode);
if (darkMode === 'dark') {
  document.getElementById('toggler').checked = true;
  console.log('Dark mode checkbox status changed to checked');
} else {
  document.getElementById('toggler').checked = false;
  console.log('Dark mode checkbox status changed to unchecked');
}
