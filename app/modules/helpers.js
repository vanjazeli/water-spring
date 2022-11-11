const helpers = {
    disableScroll: function(){
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';
    },

    enableScroll: function(){
        const html = document.querySelector('html');
        html.removeAttribute('style');
    }
}

export default helpers;