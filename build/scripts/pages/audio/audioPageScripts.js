var objectArr = [];
var songArr = ["music/heart/song0.mp3", "music/coverman/song0.mp3", "music/Slava Sinchuk/song0.mp3", "music/A history/song0.mp3", "music/Tell me why/song0.mp3"];

for (var i = 1; i <= 5; i++) {
    var obj = {
        song: songArr[i - 1],
        progressline: document.querySelector("#progress-line" + i),
        progress: document.querySelector("#progress" + i),
        songName: document.querySelector("#song-name" + i),
        imgBlock: document.querySelector("#img-block" + i),
        btnPlay: document.querySelector("#btn-play" + i),
        btnPrev: document.querySelector("#btn-prev" + i),
        btnNext: document.querySelector("#btn-next" + i),
        songUL: document.querySelector("#song-ul" + i),
        duration: document.querySelector("#duration" + i),
        minutes: document.querySelector("#minutes" + i),
        seconds: document.querySelector("#seconds" + i),
        songList: document.querySelectorAll(".song-list" + i)
    }
    objectArr.push(window["audioObj" + i] = new AudioObjConsctructor(obj));

};

function AudioObjConsctructor(obj) {
    var that = this;
    var timer;
    this.audio = new Audio();
    this.audio.src = obj.song;
    this.pause = function () {
        that.audio.pause();
    }
    this.play = function () {
        that.audio.play();
    };
    this.progressline = obj.progressline;
    this.progress = obj.progress;
    this.duration = obj.duration
    this.minutes = obj.minutes;
    this.seconds = obj.seconds;
    this.songName = obj.songName;
    this.songList = obj.songList;
    this.imgBlock = obj.imgBlock;
    this.btnPlay = obj.btnPlay;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.songUL = obj.songUL;

    this.btnPrev.onclick = function () {
        that.watcherBtnPrevNext(-1);
        that.watcherMinutesSecondsProgress();
        that.btnClasslistRemoverAdder();
        that.watcherPause();
    }
    this.btnNext.onclick = function () {
        that.watcherBtnPrevNext(1);
        that.watcherMinutesSecondsProgress();
        that.btnClasslistRemoverAdder();
        that.watcherPause();
    }
    this.progressline.onclick = function () {
        that.watcherMinutesSecondsProgress();
    }
    this.btnPlay.onclick = function () {
        that.watcherMinutesSecondsProgress();
        that.watcherPause();
        that.btnToggler();

    };
    this.songUL.onclick = function (e) {
        that.watcherMinutesSecondsProgress();
        that.watcherPause();
        var target = e.target;
        while (target != that) {
            if (target.tagName == "LI") {
                that.btnToggler();
                that.btnClasslistRemoverAdder();
                that.songName.textContent = target.dataset.songName;
                that.duration.innerHTML = target.dataset.songLength;
                that.audio.src = target.dataset.song;
                if (target.dataset.img) {
                    that.imgBlock.src = target.dataset.img;
                };
                that.play();

                break;
            }
            target = target.parentNode;
        }
    }


}


AudioObjConsctructor.prototype.watcherPause = function () {
    for (var i = 0; i < objectArr.length; i++) {
        if (objectArr[i] != this) objectArr[i].pause();
    }
}
AudioObjConsctructor.prototype.watcherMinutesSecondsProgress = function () {
    var progressLineWidth = parseInt(getComputedStyle(this.progressline).width);
    clearInterval(this.timer);
    var that = this;
    this.timer = setInterval(function () {
        var length = that.duration.innerHTML;
        var arr = length.split(":");
        length = +arr[0] * 60 + +arr[1];
        var x = progressLineWidth / length;
        that.progress.style.width = (that.audio.currentTime * x) + "px";
        that.progressline.onclick = function (e) {
            that.audio.currentTime = e.offsetX / x;
        }
        that.minutes.textContent = "0" + Math.floor(that.audio.currentTime / 60);
        if (that.seconds.textContent <= 9) {
            that.seconds.textContent = "0" + Math.floor(that.audio.currentTime % 60);
        }
        if (that.seconds.textContent > 9) {
            that.seconds.textContent = Math.floor(that.audio.currentTime % 60);
        }
    }, 100)
}
AudioObjConsctructor.prototype.watcherBtnPrevNext = function (oper) {
    for (var i = 0; i < this.songList.length; i++) {
        if (this.songName.textContent == this.songList[i].dataset.songName) {
            this.audio.src = this.songList[i + oper].dataset.song;
            this.songName.textContent = this.songList[i + oper].dataset.songName;
            this.audio.play();
            this.duration.innerHTML = this.songList[i + oper].dataset.songLength;
            break;
        }

    }

}
AudioObjConsctructor.prototype.btnToggler = function () {
    this.btnPlay.classList.toggle("fa-pause");
    this.btnPlay.classList.toggle("fa-play");
    if (this.btnPlay.classList.contains("fa-pause")) this.play();
    if (this.btnPlay.classList.contains("fa-play")) this.pause();

    var btns = document.querySelectorAll(".buttons");
    for (var i = 0; i < btns.length; i++) {
        if (btns[i] != this.btnPlay) {
            btns[i].classList.remove("fa-pause");
            btns[i].classList.add("fa-play");
        }
    }
}
AudioObjConsctructor.prototype.btnClasslistRemoverAdder = function () {
    this.btnPlay.classList.remove("fa-play");
    this.btnPlay.classList.add("fa-pause");
}
