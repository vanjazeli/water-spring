import helpers from "./helpers.js";

const general = {
    loader: document.querySelector('.js-loader'),
    zoomLinks: document.querySelectorAll('.js-image-zoom-link'),

    init: function(){
        this.loaderSettings();
        this.zoomImageSettings();
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
    },

    zoomImageSettings: function() {
        this.zoomLinks.forEach((zoomLink) => {
            zoomLink.addEventListener("mouseenter", () => {
                const module = zoomLink.closest(".js-image-zoom-module");
                const image = module.querySelector(".js-image-zoom-image");
                image.classList.add("zoom-image--active");
            });

            zoomLink.addEventListener("mouseleave", () => {
                const module = zoomLink.closest(".js-image-zoom-module");
                const image = module.querySelector(".js-image-zoom-image");
                image.classList.remove("zoom-image--active");
            });
        });
    }
}

export default general;