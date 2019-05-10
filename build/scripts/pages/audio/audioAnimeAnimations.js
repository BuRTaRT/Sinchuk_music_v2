$(window).load(function() {
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
    opacity: [0, 1],
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
let subscrText, iconContainer;
$(".social-share").mouseenter(function(e) {
  console.log(e);
  [].forEach.call(e.currentTarget.children, function(item) {
    if (item.classList.contains("icon-container")) {
      iconContainer = item;
    }
    if (item.classList.contains("subscr-text")) {
      subscrText = item;
    }
  });
  subscrText.style.opacity = 0;
  iconContainer.style.display = "flex";

});
$(".social-share").mouseleave(function() {
  subscrText.style.opacity = 1;
  iconContainer.style.display = "none";
});
