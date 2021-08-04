
// left side menu 

const close_mob_left_menu = () => {
    menu_[0].classList.remove('showSideNav') ;
    menu_[0].classList.add('closeSideNav') ;
    setTimeout(() => {
        menu_[0].classList.remove('closeSideNav') ;
        menu_conteiner.style.display = 'none' ;
        document.documentElement.style.overflowY = 'scroll' ;
    }, 400)
    
}

const open_menu_btn = document.getElementById('open_left_side_menu');
const close_menu_btn = document.getElementById('close-menu-btn');
const menu_ = document.getElementsByClassName('mob-left-menu-content');
const menu_conteiner = document.getElementById('mob-left-menu-container');

open_menu_btn.addEventListener('click', () => {
    menu_[0].classList.add('showSideNav') ;
    menu_conteiner.style.display = 'flex' ;
    document.documentElement.style.overflowY = 'hidden' ;
})

close_menu_btn.addEventListener('click', close_mob_left_menu)


// Dark/Light Mode toggler script 

var theme_toggler = document.querySelector('i[data-name=theme]');
console.log(theme_toggler) ;

theme_toggler.addEventListener('click', function () {
    if (theme_toggler.getAttribute('data-check') === 'checked') {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        theme_toggler.setAttribute('data-check', 'un') ;
        theme_toggler.classList.remove('fa-moon') ;
        theme_toggler.classList.add('fa-sun') ;
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light') ;
        theme_toggler.setAttribute('data-check', 'checked');
        theme_toggler.classList.remove('fa-sun') ;
        theme_toggler.classList.add('fa-moon') ;
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

// Resizing procces ...
const makeResp = () => {
    document.documentElement.setAttribute('data-screen', 'res-mob') ;
}

if (window.innerWidth <= 767) {
    makeResp() ;
    close_mob_left_menu() ;
}
let screen_size = 0
window.addEventListener('resize', () => {
    screen_size = window.innerWidth ;
    if(screen_size <= 767) {
        makeResp() ;
    } else {
        document.documentElement.setAttribute('data-screen', 'big') ;
    } 
    if(screen_size >= 767) {
        close_mob_left_menu() ;
    }
}) ;
