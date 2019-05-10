$(window).load(function() {
    anime({
        targets: ".comment",
        translateX: [150, 0],
        opacity:[0,1],
        easing: "easeOutQuart",
        duration: 1400
    });
    anime({
        targets: ".wiki-link",
        opacity:[0,1],
        scale:[0,1],
        easing: "linear",
        duration: 700
    });
});
