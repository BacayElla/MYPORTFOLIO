
var mixer = mixitup(containerEl, {
  animation: {
    effects: "fade translateZ(-100px)",
    effectsIn: "fade translateY(-100%)",
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
});
// fancybox insilaze & options //
$("[data-fancybox]").fancybox({
  loop: true,
  hash: true,
  transitionEffect: "slide",
  /* zoom VS next////////////////////
  clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
  clickContent: function(current, event) {
    return current.type === "image" ? "next" : false;
  }
});