$(document).ready(function(){

    $(window).scroll(function(e) {
      var newScroll = e.currentTarget.scrollY;
      console.log(e.currentTarget.scrollY);
      if(newScroll>15){
        $("#nav").css("top","0");
        $("#nav").css("width","100%");
        $("#nav").css ("position","fixed");
      }else{
        $("#nav").css("position","");
      }


    });


    $('.works-about').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
    $("#biograp").click(function(){
      $(".container-about > div").css("display","none");
      $(".biograp").show();

      $("#education").attr("class","");
      $("#works").attr("class","");
      $("#expersion").attr("class","");
      $("#biograp").attr("class","active");
    })
    $("#education").click(function(){
      $(".container-about > div").css("display","none");
      $(".education").show();

      $("#biograp").attr("class","");
      $("#works").attr("class","");
      $("#expersion").attr("class","");
      $("#education").attr("class","active");


    })
    $("#works").click(function(){
      $(".container-about > div").css("display","none");
      $(".works").show();

      $("#biograp").attr("class","");
      $("#expersion").attr("class","");
      $("#education").attr("class","");
      $("#works").attr("class","active");
    })
    $("#expersion").click(function(){
      $(".container-about > div").css("display","none");
      $(".expersion").show();

      $("#biograp").attr("class","");
      $("#works").attr("class","");
      $("#education").attr("class","");
      $("#expersion").attr("class","active");

    })

})
