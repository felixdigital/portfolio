let toggleTheme = document.getElementById("toggle-theme");
let toggleIcon = document.getElementById("toogle-icon");
let toggleText = document.getElementById("toogle-text");

toggleTheme.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if( toggleIcon.src.includes('moon.svg') )
        {
            toggleIcon.src = "assets/icons/sun.svg";
            toggleText.textContent = "Modo claro";
        }
    else
        {
            toggleIcon.src = "assets/icons/moon.svg";
            toggleText.textContent = "Modo oscuro";
        }
});

let toggleColors = document.getElementById("toogle-colors");

toggleColors.addEventListener("click",function(e){
    document.documentElement.style.setProperty( "--primary-color",e.target.dataset.color);
});
