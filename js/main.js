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


    $(".banner-slider_wrapper").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      
      
      

})



