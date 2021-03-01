function ScrollApear() {
    var introText = document.querySelector('.scroll-up');
    var IntroPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;
    
    if(IntroPosition < screenPosition){
      introText.classList.add('scroll-up-apear');
    }
    }
    
    window.addEventListener('scroll', ScrollApear);