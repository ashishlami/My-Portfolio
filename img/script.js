
$(window).on("load", function (){
  $(".loader .inner").fadeOut(500, function(){
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: '*',
    animationOptions:{
      duration:1500,
      easing:'liner',
      queue: false
    }
  });
});

$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    pagination: false,
    play: 3000,
  });


  $("#formButton").click(function(){
          $("#highlights").toggle();
      });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Bachelor's Graduated 2018."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true;
    margin:10;
    items:4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
        768:{
            items:5
        },
        938:{
            items:7
        }
    }
});

    var skillsTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function(){

     if(window.pageYOffset > skillsTopOffset - $(window).height()+ 200) {
       $('.chart').easyPieChart({
           easing:'easeInOut',
           barColor: '#fff',
           trackColor: false,
           scaleColor: false,
           linewidth: 4,
           size: 152,
           onStep: function(from, to, percent){
             $(this.el).find('.percent').text(Math.round(percent));
         }
       });
     }

     if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height()+ 200) {
       $(".counter").each(function(){

           var element = $(this);
           var endVal = parseInt(element.text());

           element.countup(endVal);
       });

        countUpFinished = true;

     }

    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
      $("#filters .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");

      $(".items").isotope({
        filter: selector,
        animationOptions:{
          duration:1500,
          easing:'liner',
          queue: false
        }
      });

      return false;
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
      var body = $("body");
      if($(window).scrollTop()>= navTop) {
        body.css("padding-top", nav.outerHeight()+"px");
        body.addClass("fixedNav");
      }
      else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
      }
    }

});
