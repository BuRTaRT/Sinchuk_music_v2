$(".list-block").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

let listItem = document.querySelectorAll(".list-item");
let slickImg = document.querySelectorAll(".slick-img");
let imgZHover = document.querySelectorAll(".z-hover");
let iframe = document.querySelector(".iframe");
let listItem2 = document.querySelectorAll(".list-item2");
let slickImg2 = document.querySelectorAll(".slick-img2");
let imgZHover2 = document.querySelectorAll(".z-hover2");
let iframe2 = document.querySelector(".iframe2");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].onmouseover = function() {
    slickImg[i].style.zIndex = "0";
    imgZHover[i].style.zIndex = "1";
  };
  listItem[i].onmouseout = function() {
    slickImg[i].style.zIndex = "1";
    imgZHover[i].style.zIndex = "0";
  };
}
for (let i = 0; i < imgZHover.length; i++) {
  imgZHover[i].onclick = function() {
    iframe.src = this.dataset.youtube;
  };
}

for (let i = 0; i < listItem2.length; i++) {
  listItem2[i].onmouseover = function() {
    slickImg2[i].style.zIndex = "0";
    imgZHover2[i].style.zIndex = "1";
  };
  listItem2[i].onmouseout = function() {
    slickImg2[i].style.zIndex = "1";
    imgZHover2[i].style.zIndex = "0";
  };
}
for (let i = 0; i < imgZHover2.length; i++) {
  imgZHover2[i].onclick = function() {
    iframe2.src = this.dataset.youtube;
  };
}


