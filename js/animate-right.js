function ScrollApear() {
    var introText = document.querySelector('.scroll-right');
    var IntroPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;
    
    if(IntroPosition < screenPosition){
      introText.classList.add('scroll-right-apear');
    }
    }
    
    window.addEventListener('scroll', ScrollApear);