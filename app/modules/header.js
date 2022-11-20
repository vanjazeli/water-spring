
const header = {
    header: document.querySelector(".js-header"),
    nav: document.querySelector(".js-header-nav"),
    open: document.querySelector(".js-header-open"),
    close: document.querySelector(".js-header-close"),

    links: document.querySelectorAll('.js-header-link'),

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

        this.links.forEach(link=>{
            link.addEventListener("click",() => {
                this.closeNav();
            })
        })
    },

    openNav: function(){
        this.nav.style.display = 'block';
        setTimeout(()=>{
            this.nav.classList.add('header__nav--active');
            this.close.classList.add('header__close--active');
        },50);
    },
    
    closeNav: function(){
        this.nav.classList.remove('header__nav--active');
        this.close.classList.remove('header__close--active');
        this.nav.addEventListener('transitionend',() => {
            this.nav.removeAttribute('style');
        },{once: true});
    },

    scroll: function(){
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > window.innerHeight - 400){
                this.header.classList.add('header--black');
            }else{
                this.header.classList.remove('header--black');
            }
        });
    }
}

export default header;