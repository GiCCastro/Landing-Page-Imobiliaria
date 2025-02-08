function toggleMenu(){
    const menu = document.querySelector('.menu-mobile');
    menu.classList.toggle('active')
}

function closeMenu(){
    const menu = document.querySelector('.menu-mobile');
    menu.classList.remove('active')
}

function toggleFilter(){
    const filter = document.querySelector('.search-properties__mobile');
    const banner = document.querySelector('.banner');
    const isActive = filter.classList.toggle('active');

    if(isActive){
        banner.style.marginTop = '0';
    }else{
        banner.style.marginTop = '100px';
    }
}

