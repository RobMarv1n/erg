// ! HEADER SLIDER

const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: 4000,
  speed: 400,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});

// ! HEADER MODAL

jQuery(document).on( "click" , '.main-header__navigation-button' , function(event) {
  event.preventDefault();
  
  let modal = jQuery(this).parents('.main-header').find('.main-header__modal-navigation-list');
  let closeButton = jQuery(this).parents('.main-header').find('.main-header__modal-close-button');
  jQuery(this).toggleClass('close-button');
  modal.toggleClass('visually-hidden');
  
});  
