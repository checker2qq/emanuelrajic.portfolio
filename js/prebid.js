function ScrollApear() {
  var introText = document.querySelector('.c-box-container');
  var IntroPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if(IntroPosition < screenPosition){
    introText.classList.add('client-apear');
  }
}

window.addEventListener('scroll', ScrollApear);
