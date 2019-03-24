$('.list-block').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

let listItem = document.querySelectorAll(".list-item");
let slickImg = document.querySelectorAll(".slick-img");
let imgZHover = document.querySelectorAll(".z-hover");
let iframe = document.querySelector(".iframe");


for (let i = 0; i < listItem.length; i++) {
	listItem[i].onmouseover = function () {
		slickImg[i].style.zIndex = "0";
		imgZHover[i].style.zIndex = "1";
	}
	listItem[i].onmouseout = function () {
		slickImg[i].style.zIndex = "1";
		imgZHover[i].style.zIndex = "0";

	}
}
for (let i = 0; i < imgZHover.length; i++) {
	imgZHover[i].onclick = function () {
		iframe.src = this.dataset.youtube;


	}
}