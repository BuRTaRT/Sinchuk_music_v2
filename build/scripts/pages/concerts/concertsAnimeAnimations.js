$(window).ready(function() {
    anime({
        targets: ".concerts-events",
        translateX: [700, 0],
        opacity:[0,1],
        easing: "easeOutQuart",
        duration: 1400
    });
    anime({
        targets: ".concerts-header-text-afisha",
        translateX: [-200, 0],
        opacity:[0,1],
        easing: "easeOutQuart",
        duration: 1400
    });
    anime({
        targets: ".concerts-concerts",
        translateX: [200, 0],
        opacity:[0,1],
        easing: "easeOutQuart",
        duration: 1400
    });

});
