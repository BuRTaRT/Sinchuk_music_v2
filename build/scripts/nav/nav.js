$('#bar-toggle').click(function(){
    $('#bar-toggle').toggleClass("fa-times fa-bars");
    $('.menu-block').toggleClass("visible");
})
$('.mus-btn').click(function(){
    $('.mus-btn').toggleClass("mus-btn__play mus-btn__stop");
})
var musBtn = document.querySelector(".mus-btn");
var audio = document.getElementById("bgAudio");
var timer;
audio.currentTime = sessionStorage.getItem("currentTime");
if (sessionStorage.getItem("status") == "play") {
	musBtn.classList = "mus-btn mus-btn__stop";
	audio.play();
	timer = setInterval(function () {
		sessionStorage.setItem("currentTime", audio.currentTime), 250
	})
}

musBtn.onclick = function () {
	if (musBtn.classList.contains("mus-btn__stop")) {
		audio.play();
		timer = setInterval(function () {
			sessionStorage.setItem("currentTime", audio.currentTime)
		}, 250)
		sessionStorage.setItem("status", "play")

	}
	if (musBtn.classList.contains("mus-btn__play")) {
		audio.pause();
		sessionStorage.setItem("currentTime", audio.currentTime)
		clearInterval(timer);
		sessionStorage.setItem("status", "stop")


	}

}
