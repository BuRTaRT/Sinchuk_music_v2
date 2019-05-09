$(window).ready(function() {
  anime({
    targets: ".header-albums",
    translateY: [-500, 0],
    translateX: [300, 0],
    rotate: ["180deg", "0deg"],
    easing: "easeOutQuart",
    duration: 1400
  });
  anime({
    targets: ".header-music",
    opacity: [0,1],
    easing: "linear",
    duration: 2000
  });
    anime({
        targets: ".header-songs",
        translateY: [-500, 0],
        translateX: [300, 0],
        rotate: ["180deg", "0deg"],
        easing: "easeOutQuart",
        duration: 1400
    });
});
