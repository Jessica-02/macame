//Carousel
$(document).ready(function(){

	$('#indexPrincipal').owlCarousel({
            loop:true,
            autoplay: false,
            margin:10,
            nav:true,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },

                900:{
                    items:1                },

                1200:{
                    items:1
                },

                1500:{
                    items:1
                }
            }
        })

        $('#productosPopulares').owlCarousel({
            loop:true,
            autoplay: true,
            margin:150,
            nav:false,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },

                900:{
                    items:3
                },

                1200:{
                    items:4
                },

                1500:{
                    items:4
                }
            }
        })
});