$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay:true
    });

    $('.menu').click(function(){
        $('nav').slideToggle();
    })

    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            },
            vehicleInterest: {
                required: false
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if(incorrectFields) {
                alert(`There ${incorrectFields} incorrect fields`)
            }
        }
    })

    $('.list-vehicles button').click(function(){
        const destiny = $('#contact');
        const vehicleName = $(this).parent().find('h3').text();

        $('#vehicle-interest').val(vehicleName)

        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })

})