(function (){
    const btnHamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    btnHamburger.addEventListener('click', ()=>{
        navbar.classList.toggle('open');
    });
})()