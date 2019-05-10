$(document).ready(function () {
    var videobackground = new $.backgroundVideo($('body'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "BgVideo2",
        "types": ["mp4"],
        "preload": false,
        "autoplay": true,
        "loop": true,
        "muted": true

    });
});