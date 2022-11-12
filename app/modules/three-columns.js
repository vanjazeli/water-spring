const threeColumns = {
    links: document.querySelectorAll('.js-three-columns-link'),
    images: document.querySelectorAll('.js-three-columns-image'),

    init: function() {
        this.settings();
    },

    settings: function() {
        this.links.forEach((link,index) =>{
            link.addEventListener('mouseenter',() => {
                const card = link.closest('.js-three-columns-card');
                card.classList.add('card--active');
                this.images[index].classList.add('three-columns__image--active');
            })
        });

        this.links.forEach((link,index) =>{
            link.addEventListener('mouseleave',() => {
                const card = link.closest('.js-three-columns-card');
                card.classList.remove('card--active');
                this.images[index].classList.remove('three-columns__image--active');
            })
        });
    },
}

export default threeColumns;