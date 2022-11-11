const imageOut = {
    links: document.querySelectorAll('.js-image-out-link'),

    init: function(){
        this.settings();
    },

    settings: function(){
        this.links.forEach(link=>{
            link.addEventListener('mouseenter',()=>{
                const module = link.closest('.js-image-out');
                const image = module.querySelector('.js-image-out-image');
                image.classList.add('image-out__image--active');
            });

            link.addEventListener('mouseleave',()=>{
                const module = link.closest('.js-image-out');
                const image = module.querySelector('.js-image-out-image');
                image.classList.remove('image-out__image--active');
            });
        })
    }
}

export default imageOut;