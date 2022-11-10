const banner = {
    content: document.querySelector(".js-banner-content"),
    overlay: document.querySelector(".js-banner-overlay"),
    button: document.querySelector(".js-banner-button"),

    init: function(){
        this.bannerSettings();
    },

    bannerSettings: function(){
        window.addEventListener('scroll', () => {
            this.content.style.transform = `translateY(-${window.scrollY * 0.2}px)`;
            this.overlay.style.backgroundColor = `rgba(0,0,0,${(window.scrollY * 0.0008) + 0.4})`;
        });

        this.button.addEventListener("click",() => {
            window.scrollBy({top: window.innerHeight, behavior: 'smooth'});
        })
    }

}

export default banner;