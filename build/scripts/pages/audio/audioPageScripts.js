const objectArr = [];
const songArr = ["music/heart/song0.mp3", "music/Coverman/song0.mp3", "music/SlavaSinchuk/song0.mp3", "music/A history/song0.mp3", "music/Tell me why/song0.mp3"];

for (let i = 1; i <= 5; i++) {
    const obj = {
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
}
function AudioObjConsctructor(obj) {
    this.audio = new Audio();
    this.audio.src = obj.song;
    this.pause = () => {
        this.audio.pause();
    }
    this.play = () => {
        this.audio.play();
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

    this.btnPrev.onclick = () => {
        this.watcherBtnPrevNext(-1);
        this.watcherMinutesSecondsProgress();
        this.btnClasslistRemoverAdder();
        this.watcherPause();
    }
    this.btnNext.onclick = () => {
        this.watcherBtnPrevNext(1);
        this.watcherMinutesSecondsProgress();
        this.btnClasslistRemoverAdder();
        this.watcherPause();
    }
    this.progressline.onclick = () => {
        this.watcherMinutesSecondsProgress();
    }
    this.btnPlay.onclick = ()=> {
        this.watcherMinutesSecondsProgress();
        this.watcherPause();
        this.btnToggler();

    };
    this.songUL.onclick =(e)=> {
        this.watcherMinutesSecondsProgress();
        this.watcherPause();
        let target = e.target;
        while (target !== this) {
            if (target.tagName === "LI") {
                this.btnToggler();
                this.btnClasslistRemoverAdder();
                this.songName.textContent = target.dataset.songName;
                this.duration.innerHTML = target.dataset.songLength;
                this.audio.src = target.dataset.song;
                if (target.dataset.img) {
                    this.imgBlock.src = target.dataset.img;
                }
                this.play();
                break;
            }
            target = target.parentNode;
        }
    }
}

AudioObjConsctructor.prototype.watcherPause = function () {
    for (let item of objectArr) {
        if (item !== this) item.pause();
    }
}
AudioObjConsctructor.prototype.watcherMinutesSecondsProgress = function () {
    const progressLineWidth = parseInt(getComputedStyle(this.progressline).width);
    clearInterval(this.timer);
    this.timer = setInterval(()=> {
        let length = this.duration.innerHTML;
        const arr = length.split(":");
        length = +arr[0] * 60 + +arr[1];
        const x = progressLineWidth / length;
        this.progress.style.width = (this.audio.currentTime * x) + "px";
        this.progressline.onclick = (e)=> {
            this.audio.currentTime = e.offsetX / x;
        }
        this.minutes.textContent = "0" + Math.floor(this.audio.currentTime / 60);
        if (this.seconds.textContent <= 9) {
            this.seconds.textContent = "0" + Math.floor(this.audio.currentTime % 60);
        }
        if (this.seconds.textContent > 9) {
            this.seconds.textContent = Math.floor(this.audio.currentTime % 60);
        }
    }, 100)
}
AudioObjConsctructor.prototype.watcherBtnPrevNext = function (oper) {
    for (let i = 0; i < this.songList.length; i++) {
        if (this.songName.textContent === this.songList[i].dataset.songName) {
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

    const btns = document.querySelectorAll(".buttons");
    for (let btn of btns) {
        if (btn !== this.btnPlay) {
            btn.classList.remove("fa-pause");
            btn.classList.add("fa-play");
        }
    }
}
AudioObjConsctructor.prototype.btnClasslistRemoverAdder = function () {
    this.btnPlay.classList.remove("fa-play");
    this.btnPlay.classList.add("fa-pause");
}
