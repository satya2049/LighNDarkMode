const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox=document.getElementById('text-box');
const blackBg = 'rgb(0 0 0 /50%)';
const whiteBg = 'rgb(255 255 255 /50%)';


function onThemeChange(theme,navBg,textBoxBg){
        document.documentElement.setAttribute('data-theme',theme);
        nav.style.backgroundColor = navBg;
        textBox.style.backgroundColor = textBoxBg;
        const themeText = theme[0].toUpperCase() + theme.slice(1);
        toggleIcon.children[0].textContent = `${themeText} Mode`;
        toggleIcon.children[1].classList.toggle('fa-sun');
        toggleIcon.children[1].classList.toggle('fa-moon');
        image1.src = `img/undraw_proud_coder_${theme}.svg`;
        image2.src = `img/undraw_conceptual_idea_${theme}.svg`;
        image3.src = `img/undraw_feeling_proud_${theme}.svg`;
}
function toggleTheme(event){
    if(event.target.checked){
        onThemeChange('dark',blackBg,whiteBg);
        localStorage.setItem('currentTheme','dark');
    }else{
        onThemeChange('light',whiteBg,blackBg);
        localStorage.setItem('currentTheme','light');
    }
}
toggleSwitch.addEventListener('change',toggleTheme);

const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme === 'dark'){
    toggleSwitch.checked = true;
    onThemeChange('dark',blackBg,whiteBg);
}
else if(currentTheme === 'light'){
    toggleSwitch.checked = false;
}