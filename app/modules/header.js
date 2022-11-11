import helpers from "./helpers.js";

const header = {
    header: document.querySelector(".js-header"),
    nav: document.querySelector(".js-header-nav"),
    open: document.querySelector(".js-header-open"),
    close: document.querySelector(".js-header-close"),

    init: function(){
        this.settings();
        this.scroll();
    },

    settings: function(){
        this.open.addEventListener("click",() => {
            this.openNav();
        });

        this.close.addEventListener("click",()=>{
            this.closeNav();
        });
    },

    openNav: function(){
        this.nav.style.display = 'block';
        helpers.disableScroll();
        setTimeout(()=>{
            this.nav.classList.add('header__nav--active');
        },50);
    },

    closeNav: function(){
        this.nav.classList.remove('header__nav--active');
        this.nav.addEventListener('transitionend',() => {
            this.nav.removeAttribute('style');
            helpers.enableScroll();
        },{once: true});
    },

    scroll: function(){
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > window.innerHeight - 200){
                this.header.classList.add('header--black');
            }else{
                this.header.classList.remove('header--black');
            }
        });
    }
}

export default header;