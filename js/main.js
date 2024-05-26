const mobileNav = document.querySelector('nav ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})


// disable rightclick
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {

// disable F12 key
if(e.keyCode == 123) {
alert("Halo f12!?");
    return false;
}


// disable c key
if(e.ctrlKey && e.keyCode == 67){
    alert("Rabuś nie kradnij!!");
    return false;

}

    // disable c key
if(e.ctrlKey && e.keyCode == 67){
    alert("Rabuś nie kradnij!!");
    return false;

}


// disable i key
if(e.ctrlKey && e.keyCode == 73) {
alert("ni ma");
    return false;
} 

// disable j key
if(e.ctrlKey && e.keyCode == 74) {
alert("Nie tak prędko");
    return false;
}

    // disable p key
if(e.ctrlKey && e.keyCode == 80){
    alert("ty chcesz to drukowac? xdd");
    return true;
    alert("Trzymaj i powieś na ścianie");

}

}