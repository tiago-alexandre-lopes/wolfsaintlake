$(document).ready(function() {
    


    // Animate sections when they reach the viewport
    const sections = document.querySelectorAll('section')
    const config = {
        rootMargin: '0px',
        threshold: 0.15
    }

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadein')
            }
        })
    }, config)

    sections.forEach(section => {
        observer.observe(section)
    })

    
});




// Apply horizontal scroll only on mobile -> below 700px height
$(document).ready(function() {

    $(window).on('load resize', function() {

        if (! /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  {

            $("body").addClass("desktop").removeClass("mobile");

            //Adds horizontal scroll
            $('html, body, *').mousewheel(function(e, delta) {
                this.scrollLeft -= (delta);
                e.preventDefault();
            });

            // Inverts z-index
            var item_count = $('section').length;
            for( i = 0; i < item_count; i++ )
            {
                $('section').eq( i ).css( 'z-index', item_count - i );
            }
        }

    });

});

$(document).ready(function() {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("body").addClass("mobile").removeClass("desktop");
    }
});



// Open navigation


$(".burger-icon-wrapper").click(function(){
    $(".burger-icon").toggleClass("active");
    $("body").toggleClass("navigation-open");
});


$("#navigation a").click(function(){
    $(".burger-icon").removeClass("active");
    $("body").removeClass("navigation-open");
});