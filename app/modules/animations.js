const animations = {
  banner: document.querySelector(".js-banner"),

  init: function () {
    this.bannerLoad();
  },

  bannerLoad: function () {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.banner.classList.add("banner--animation");
      }, 1500);
    });
  },
};

export default animations;
