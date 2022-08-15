window.addEventListener('load', () => {
    const openMenuBtn = document.querySelector('.mobile-open-btn')
    const closeMenuBtn = document.querySelector('.mobile-close-btn')
    
    const modalMenu = document.querySelector('.mobile-menu_wrapper')

    const openModalMenu = () => {
        modalMenu.classList.toggle('hidden')
        closeMenuBtn.classList.toggle('hidden')
        openMenuBtn.classList.toggle('hidden') 
        document.body.classList.toggle('no-scroll')
    }

    openMenuBtn.addEventListener('click', openModalMenu)

    closeMenuBtn.addEventListener('click', openModalMenu)
   

    //open entertainmentList
    const entertainmentBtn = document.querySelector('.entertainment-btn')
   
    const entertainmentList =document.querySelector('.entertainment-list')

    entertainmentBtn.addEventListener('click', () => {
        entertainmentList.classList.toggle('show');
    })


    //open holidaysList
    const holidaystBtn = document.querySelector('.holidays-btn')
   
    const holidaystList =document.querySelector('.holidays-list')

    holidaystBtn.addEventListener('click', () => {
        holidaystList.classList.toggle('show');
    })


    //slider in banner

    $(".banner-slider_wrapper").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });


   
      //slider in events section

      $(".events-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: ".events-name"
      });
      $(".events-name").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: ".events-content",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        slide: "div",
        prevArrow: '<button type="button" class="btn-prev"><img src="images/prev-slider-top.svg" alt=""></button>',
        nextArrow: '<button type="button" class="btn-next"><img src="images/next-clider-top.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 4,
                arrows: true
              }
            },
            {
                breakpoint: 1560,
                settings: {
                  slidesToShow: 3,
                  arrows: true
                }
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  arrows: true
                }
              },
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  centerMode: true,
                }
              }
          ]
      });
      

      //slider inside event section
 
      $(".item-slider__wrapper").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="events-btn-prev"><img src="images/prev-slider-top.svg" alt=""></button>',
        nextArrow: '<button type="button" class="events-btn-next"><img src="images/next-clider-top.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 770,
              settings: {
                // centerMode: false,
                // autoplay: true,
                
              }
            }
        ]
      });



      //popup-booking

      //close&open

      const itemContentBtns = document.querySelectorAll('.item-content__btn');

      const closeBtnPopupBooking = document.querySelector('.popup-booking-place_close-btn')
      
      const popupBooking = document.querySelector('.popup-booking');

      const openPopupBooking = () => {
        popupBooking.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')
      }

      itemContentBtns.forEach(btn => {
        btn.addEventListener('click', openPopupBooking)
      })

      closeBtnPopupBooking.addEventListener('click', openPopupBooking)

      //input

      const popupBookingPlaceInput = document.querySelector('.popup-booking-place_input');

      const popupBookingPlaceList = document.querySelector('.popup-booking-place_list')

      const popupBookingPlaceItems = document.querySelectorAll('.popup-booking-place_item')

      popupBookingPlaceItems.forEach(item => {
        item.addEventListener('click', () => {
          console.log(item.textContent)
          popupBookingPlaceInput.value = item.textContent
          popupBookingPlaceList.classList.toggle('hidden')
        })
      })

      popupBookingPlaceInput.addEventListener('click', () => {
        popupBookingPlaceList.classList.toggle('hidden')
      })


      //popup slider

      $(".popup-booking-games_list").slick({
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows:false,

      });
      
})  



