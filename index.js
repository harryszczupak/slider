const photo = document.querySelectorAll('.popup_img ');
const jump = document.querySelector('.jump');
const jump_img = document.querySelector('.jump_img');
const jump_cancel = document.querySelector('.jump_cancel');
const next_img = document.querySelector('.next_img');
const previous_img = document.querySelector('.previous_img');
const img_down = document.querySelectorAll('.img_downAll');
const topDescription = document.querySelector('span');
let currentImgIndex;

img_down.forEach((el) => {
	el.addEventListener('click', (e) => {
		jump.classList.remove('jump_hidden');
		jump_img.src = e.target.src;
	});
});
let points = 0;
photo.forEach((el, i) => {
	points++;
	el.addEventListener('click', (e) => {
		jump.classList.remove('jump_hidden');
		jump_img.src = e.target.src;
		currentImgIndex = i;
		topDescription.innerHTML = currentImgIndex + 1 + '/' + points;
	});
	jump_cancel.addEventListener('click', () => {
		jump.classList.add('jump_hidden');
	});
});
next_img.addEventListener('click', () => {
	if (currentImgIndex === photo.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	jump_img.src = photo[currentImgIndex].src;
	topDescription.innerHTML = currentImgIndex + 1 + '/' + points;
});
previous_img.addEventListener('click', () => {
	if (currentImgIndex === 0) {
		currentImgIndex = photo.length - 1;
	} else {
		currentImgIndex--;
	}
	jump_img.src = photo[currentImgIndex].src;
	topDescription.innerHTML = currentImgIndex + 1 + '/' + points;
});
