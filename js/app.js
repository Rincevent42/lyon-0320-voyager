 /* Text animation in the header */

document.addEventListener('DOMContentLoaded', function () {
    const planetes = ["Arrakis", "Pandora", "Coruscant","Mars"];
    const change = document.getElementById('changeText');
    let i = 0;
    const intervalId = setInterval(function () {
        change.innerHTML = planetes[i];
        change.classList.add("slide")
        i++;
        if (i > 3) {
            i = 0;
        }
    }, 3000)
})

/* Dark mode / light mode toggleling */
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);




 