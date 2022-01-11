let bg = document.getElementById("background");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    /*y est le nombre de pixels verticaux défilés*/
    var y = window.scrollY;

    bg.style.top = y * 0.5 + 'px';
    moon.style.left = - y * 0.5 + 'px';
    mountain.style.top = - y * 0.15 + 'px';
    road.style.top = y * 0.15 + 'px';
    text.style.top = y * 1 + 'px';
})

