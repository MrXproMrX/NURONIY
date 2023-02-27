// =================video================


$(document).ready(function(){

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  
  $('.slider-nav').slick({
    slidesToShow: 100,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    vertical:true,
  });

});


// ================video=================


//======= Oʻzbekiston viloyatlari start  ======

$('.regional_councils__adrise__top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});

$('path[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.regional_councils__adrise__top').slick('slickGoTo', slideno - 1);
});

// === active ===

$(function(){
  let mapsvg_region = document.querySelectorAll('.mapsvg_region');

  for(let i = 0; i<mapsvg_region.length; i++){
      mapsvg_region[i].addEventListener('click',function(){
          for(let j = 0; j<mapsvg_region.length;j++){
              mapsvg_region[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

//======= Oʻzbekiston viloyatlari end  ======

// ----------------------------------------------------------

$(window).on('load',function(){
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});

// --------\/--ACTIVE--\/---------

$(function(){
  let pogination__number = document.querySelectorAll('.pogination__number');

  for(let i = 0; i<pogination__number.length; i++){
      pogination__number[i].addEventListener('click',function(){
          for(let j = 0; j<pogination__number.length;j++){
              pogination__number[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// --------/\--ACTIVE--/\---------


// -=-=-=-==-=-=-----=-=-=-=--=--=-=-=-=-

function slowScroll(id){
  		$('html,bode').animate({
  			scrollTop:$(id).offset().top
  		},500);
  	}

// -=-=-=-=-=--=-==--=-=--=-==-=-=--=-=-


$(document).ready(function(){
$('.slaeder__top').slick({
        dots: true,
        arrows:false,
        autoplaySpeed:3000,
        infinite: true,
        speed: 1500,
        autoplay:true,
        fade: true,
});

$('.FOTO_GALEREYA__top').slick({
      dots: false,
      arrows:true,
      autoplaySpeed:3000,
      infinite: true,
      speed: 1500,
      autoplay:true,
      fade: true,
});

  $('.paginator').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
});

$('.NEWSPAPER__top').slick({
        dots: false,
        arrows:true,
        autoplaySpeed:3000,
        infinite: true,
        autoplay:true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 951,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
});  

// -==========================----===




$('.Foto_galereya__top').slick({
        dots: false,
        arrows:true,
        autoplaySpeed:2000,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 951,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
 });  
});


$(document).ready(function(){
  $('.header__burger').click(function(){
    $('.header__mrx').fadeTo(500,1);
    $('.header__mrx').css('display','block');
  });
});

$(document).ready(function(){
  $('.header__burger__false').click(function(){
    $('.header__mrx').fadeTo(500,1);
    $('.header__mrx').css('display','none');
  });
});



