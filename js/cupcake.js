
// $('.owl-carousel').owlCarousel({
    
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:2000,
//     dots:true,
//     // nav:true,
//     //  navText :[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")]
   
//     responsive:{
//         200:{
//             items:1
//         },
//         700:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
    
// });
AOS.init();
$('.owl-carousel').owlCarousel({

//     loop:true,
//     autoplay:true,
//     autoplayTimeout:2000,
dots:true,
items:3,
responsive:{
            200:{
                items:1,
                // dots:false
            },
            485:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:3
            }
        }
});

