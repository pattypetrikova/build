$(document).ready(function () {

  new WOW().init();

// modalni okno
    var button = $(".form-button");
    var modal = $(".modal")
    var close = $(".modal-dialog__close")

    button.on("click", function(){
        modal.addClass("modal_active");
    })

    close.on("click", function() {
        modal.removeClass("modal_active");
    })


// Validace formularu

$("#brief-form").validate({
  rules: {
    username: "required",
    phone: "required",
  },
  messages: {
    username: "Uveďte Vaše jméno",
    phone: "Uveďte Váš telefon",
  }
});



// slick slider
    $(".projects-wrap").slick({
        slidesToShow: 3,
        prevArrow: $("#left"),
        nextArrow: $("#right"),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
        
    });
})