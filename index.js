const photo = document.querySelectorAll('.popup_img ');
const jump = document.querySelector('.jump');
const jump_img = document.querySelector('.jump_img');
const jump_cancel = document.querySelector('.jump_cancel');
const next_img = document.querySelector('.next_img');
const previous_img = document.querySelector('.previous_img');
const img_down = document.querySelectorAll('.img_down');
let currentImgIndex;
photo.forEach((el, i) => {
	


	el.addEventListener('click', (e) => {
		jump.classList.remove('jump_hidden');
		jump_img.src = e.target.src;
		currentImgIndex = i;
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
});
previous_img.addEventListener('click', () => {
	if (currentImgIndex === 0) {
		currentImgIndex = photo.length - 1;
	} else {
		currentImgIndex--;
	}
	jump_img.src = photo[currentImgIndex].src;
});

dupa
