const photo = document.querySelectorAll('.popup_img ');
const jump = document.querySelector('.jump');
const jump_img = document.querySelector('.jump_img');
const jump_cancel = document.querySelector('.jump_cancel');
const next_img = document.querySelector('.next_img');
const previous_img = document.querySelector('.previous_img');
const img_down = document.querySelectorAll('.img_downAll');
const topDescription = document.querySelector('span');
const bottomDescription = document.querySelector('.description');
let currentImgIndex;
let points = 0;
function arrow_description() {
	if (currentImgIndex == 0) {
		bottomDescription.innerHTML = 'lake';
	} else if (currentImgIndex == 1) {
		bottomDescription.innerHTML = 'the Chinese wall';
	} else {
		bottomDescription.innerHTML = 'Misisipi';
	}
}

function ChangeBottom_img() {
	img_down.forEach((el) => {
		el.addEventListener('click', (e) => {
			jump.classList.remove('jump_hidden');
			jump_img.src = e.target.src;
		});
	});
}
ChangeBottom_img();

photo.forEach((el, i) => {
	points++;
	el.addEventListener('click', (e) => {
		jump.classList.remove('jump_hidden');
		jump_img.src = e.target.src;
		currentImgIndex = i;
		topDescription.innerHTML = currentImgIndex + 1 + '/' + points;

		function main_Bottomdescription() {
			if (el == photo[0]) {
				bottomDescription.innerHTML = 'lake';
			} else if (el == photo[1]) {
				bottomDescription.innerHTML = 'the Chinese wall';
			} else {
				bottomDescription.innerHTML = 'Misisipi';
			}
		}
		main_Bottomdescription();
	});
	function exitButton() {
		jump_cancel.addEventListener('click', () => {
			jump.classList.add('jump_hidden');
		});
	}
	exitButton();
});
function rightArrow() {
	next_img.addEventListener('click', () => {
		if (currentImgIndex === photo.length - 1) {
			currentImgIndex = 0;
		} else {
			currentImgIndex++;
		}
		jump_img.src = photo[currentImgIndex].src;
		topDescription.innerHTML = currentImgIndex + 1 + '/' + points;

		arrow_description();
	});
}
rightArrow();
function leftArrow() {
	previous_img.addEventListener('click', () => {
		if (currentImgIndex === 0) {
			currentImgIndex = photo.length - 1;
		} else {
			currentImgIndex--;
		}
		jump_img.src = photo[currentImgIndex].src;
		topDescription.innerHTML = currentImgIndex + 1 + '/' + points;

		arrow_description();
	});
}
leftArrow();
