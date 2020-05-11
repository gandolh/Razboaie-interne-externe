  // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })


      $(function() {
            var showcase = $("#showcase")

            showcase.Cloud9Carousel( {
                  yPos: 42,
                  yRadius: 48,
                  mirrorOptions: {
                        gap: 12,
                        height: 0.2
                  },
                  buttonLeft: $(".nav > .left"),
                  buttonRight: $(".nav > .right"),
                  autoPlay: true,
                  bringToFront: true,

                  onRendered: showcaseUpdated,
                  onLoaded: function() {
                        showcase.css( 'visibility', 'visible' )
                        showcase.css( 'display', 'none')
                        showcase.fadeIn( 1500 )
                  }
            })

            function showcaseUpdated( showcase ) {
                  var title = $("#item-title").html(
                        $(showcase.nearestItem()).attr( 'alt' )
                  )

                  var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
                  title.css('opacity', 0.5 + (0.5 * c))
            }

            $('.nav > button').click( function( e ) {
                  var b = $(e.target).addClass( 'down' )
                  setTimeout( function() { b.removeClass( 'down' ) }, 80)
            } )

            $(document).keydown( function( e ) {
                  switch( e.keyCode ) {
                        case 37:
                        $('.nav > .left').click()
                        break

                        case 39:
                        $('.nav > .right').click()
                  }
            })
      })