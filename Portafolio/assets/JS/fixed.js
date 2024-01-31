(function () {
    let  navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos(){
        windowPos = window.scrollY;
    }

    function onScroll () {
        updatePos ();
        console.log(windowPos,breakpoint,main.offsetTop,navbarHeight);
        let classOpen = navbar.classList.contains('open');
        console.log(classOpen);
        if (windowPos >= breakpoint && !isFixed) {
            // navbar.classList.remove('open');
            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight;
            isFixed = true;
        } else if(windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        } else  {
            navbar.classList.remove('open');
        }
    }

    document.addEventListener('scroll', onScroll);
})()