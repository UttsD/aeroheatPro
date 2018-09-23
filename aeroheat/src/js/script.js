SlideTo();
let SliderImg = document.getElementById("slider-img")
    left = -2188;
    imgWidth = 1094;
var timer;
var time = 7000; //5 секунд



function  SlideTo()  {
 timer = setTimeout(function (){
		left -= imgWidth;
		if (left < -2188) {
			left = 0;
			clearTimeout(timer);
		}
		SliderImg.style.left = left +'px';
		SlideTo();
	}, time);
}

