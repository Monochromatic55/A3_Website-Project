//GLOBAL DEFINITIONS//
//The following definitions targets the image representing each individual alongside their correspondent text & speech bubble//
const allanImage = document.getElementById ('HUMAN_ONE');
const allanContainer = document.getElementById('ALLAN_CON');
const charlotteImage = document.getElementById ('HUMAN_TWO');
const charlotteContainer = document.getElementById ('CHARLOTTE_CON')
const kiaraImage = document.getElementById ('HUMAN_THREE');
const kiaraContainer = document.getElementById ('KIARA_CON');
const jacksonImage = document.getElementById ('HUMAN_FOUR');
const jacksonContainer = document.getElementById ('JACKSON_CON');
//This acts as a numerical value assigned to the “display” variable//
let display = 0;


//SECTION 2: USER INTERVIEWS//
//An event listener that’s triggered when an individual’s image is “clicked on”//
//The event also runs the assigned function associated with that individual//
allanImage.addEventListener("click", showAllan);
charlotteImage.addEventListener("click", showCharlotte);
kiaraImage.addEventListener("click", showKiara);
jacksonImage.addEventListener("click", showJackson);

//Functions listed by each human’s name//
// 1) The function firstly checks if the display has an assigned value.//
// 2) If display is not assigned 1, then the function will assign display as 1. This results in the human’s speech bubble & text changing to ‘block’.//
// 3) If not, the display will be set to 0, changing the speech bubble & text to ‘none’//
function showAllan () {
  if (display !== 1) //1//
  {
    ALLAN_CON.style.display='block';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 1; //2//
  }
  else
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 0; //3//
  }
}

// 1) The function firstly checks if the display has an assigned value.//
// 2) If display is not assigned 2, then the function will assign display as 2. This results in the human’s speech bubble & text changing to ‘block’.//
// 3) If not, the display will be set to 0, changing the speech bubble & text to ‘none’//
function showCharlotte () {
  if (display !== 2) //1//
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='block';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 2; //2//
  }
  else
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 0; //3//
  }
}

// 1) The function firstly checks if the display has an assigned value.//
// 2) If display is not assigned 3, then the function will assign display as 3. This results in the human’s speech bubble & text changing to ‘block’.//
// 3) If not, the display will be set to 0, changing the speech bubble & text to ‘none’//
function showKiara () {
  if (display != 3) //1//
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='block';
    JACKSON_CON.style.display='none';
    display = 3; //2//
  }
  else
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 0; //3//
  }
}

// 1) The function firstly checks if the display has an assigned value.//
// 2) If display is not assigned 4, then the function will assign display as 4. This results in the human’s speech bubble & text changing to ‘block’.//
// 3) If not, the display will be set to 0, changing the speech bubble & text to ‘none’//
function showJackson () {
  if (display != 4) //1//
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='block';
    display = 4; //2//
  }
  else
  {
    ALLAN_CON.style.display='none';
    CHARLOTTE_CON.style.display='none';
    KIARA_CON.style.display='none';
    JACKSON_CON.style.display='none';
    display = 0; //3//
  }
}


//SECTION 3: IMAGE CAROUSEL USING CSS AND JQUERY//
//INSPIRATION TAKEN FROM: https://codepen.io/NeatDesigns/details/pLqQKa//
$(function() {
    var inWrap = $('.SEC3_INNER_WRAPPER'),
    $slide = $('.slide');
  
    function slideNext() {
      inWrap.animate({left: '-200%'}, 200, function() {
        inWrap.css('left', '-100%');
        $('.slide').last().after($('.slide').first());
      });
    }
  
    sliderInterval = setInterval(slideNext, 100000);
  
    $('.prev').on('click', function() {
      inWrap.animate({left: '0%'}, 200, function() {
        inWrap.css('left', '-100%');
        $('.slide').first().before($('.slide').last());
      });
    });
  
    $('.next').on('click', function() {
      clearInterval(sliderInterval);
      slideNext();
    });
});


//GSAP ANIMATION//
//SECTION 1//
gsap.registerPlugin(ScrollTrigger);

gsap.to(".SEC1_TITLE1", {
  x: 730,
  scrollTrigger: {
    end: 'end',
    trigger: ".SEC_1",
    toggleActions: "play complete",
    scrub: true,
  }
})

gsap.to(".SEC1_TITLE2", {
  x: -822,
  scrollTrigger: {
    end: 'end',
    trigger: ".SEC_1",
    toggleActions: "play complete",
    scrub: true,
  }
})

gsap.to(".SEC1_IMG", {
  y: 650,
  scrollTrigger: {
    start: 400,
    end: 1000,
    toggleActions: "play complete",
    scrub: 2,
  }
})

//SECTION 2//
gsap.to(".SEC2_TITLE", {
  x: 1380,
  scrollTrigger: {
    end: 'end',
    trigger: ".SEC_2",
    toggleActions: "play complete",
    scrub: true,
  }
})

//SECTION 3//
gsap.to(".SEC3_TITLE", {
  x: -896,
  scrollTrigger: {
    end: 'end',
    trigger: ".SEC_3",
    toggleActions: "play complete",
    scrub: true,
  }
})

//FOOT//
gsap.to(".FOOT_SEC1", {
  x: -489,
  scrollTrigger: {
    end: 'end',
    trigger: ".FOOT",
    toggleActions: "play complete",
    scrub: true,
  }
})

gsap.to(".BEER_CONTAINER", {
  x: 1500,
  scrollTrigger: {
    end: 'end',
    trigger: ".FOOT",
    toggleActions: "play complete",
    scrub: true,
  }
})