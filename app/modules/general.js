import helpers from "./helpers.js";

const general = {
    loader: document.querySelector('.js-loader'),

    init: function(){
        this.loaderSettings();
    },

    loaderSettings: function(){
        this.loader.addEventListener('transitionend',()=>{
            this.loader.style.display = 'none';
        },{once: true});

        window.addEventListener('load',() => {
            setTimeout(()=>{
                this.loader.classList.add('loader--fade-out');
                helpers.enableScroll();
            },3000);
        });
    }
}

export default general;