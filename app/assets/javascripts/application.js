// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery.pagepiling.js
//= require typing.js
//= require_self
//= require_tree .

$(document).ready(function() {
        /*
        * Plugin intialization
        */
        
        $('#pagepiling').pagepiling({
            verticalCentered:false,
            css3:false,
            onLeave: function(index, nextIndex, direction){

                //fading out the txt of the leaving section
                $('.section').eq(index -1).find('h1, p').fadeOut(700, 'easeInQuart');

                //fading in the text of the destination (in case it was fadedOut)
                $('.section').eq(nextIndex -1).find('h1, p').fadeIn(700, 'easeInQuart');


                //reaching our last section? The one with our normal site?
                if(nextIndex == 4){

                    //fading out navigation bullets
                    $('#pp-nav').fadeOut();

                    $('#section4').find('.content').animate({
                        top: '0%'
                    }, 700, 'easeInQuart');
                }

                //leaving our last section? The one with our normal site?
                if(index == 4){
                    //fadding in navigation bullets
                    $('#pp-nav').fadeIn();

                    $('#section4 .content').animate({
                        top: '100%'
                    }, 700, 'easeInQuart');
                }
            },
        });

      $('#container').imagesLoaded()
        .always( function( instance ) {
          console.log('all images loaded');
        })
        .done( function( instance ) {
          console.log('all images successfully loaded');
        })
        .fail( function() {
          console.log('all images loaded, at least one is broken');
        })
        .progress( function( instance, image ) {
          var result = image.isLoaded ? 'loaded' : 'broken';
          console.log( 'image is ' + result + ' for ' + image.img.src );
        });

        $('.grid').masonry({
          columnWidth: 320,
          itemSelector: '.grid-item'
        });
      });
