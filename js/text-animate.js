function ScrollApear() {
var introText = document.querySelector('.scroll-left');
var IntroPosition = introText.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 2;

if(IntroPosition < screenPosition){
  introText.classList.add('text-apear');
}
}

window.addEventListener('scroll', ScrollApear);