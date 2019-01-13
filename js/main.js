$(document).ready(function(){

    $(".meny > ul > li").click(function(){
      let  id = $(this).attr("id");
      console.log();
      if(id==1){
        $('html, body').animate({scrollTop:320}, 1000);
      } else if (id==2) {
        $('html, body').animate({scrollTop:760}, 1000);

      }else if(id==3){
        $('html, body').animate({scrollTop:1000}, 1000);
      }else{
        $('html, body').animate({scrollTop: 1920}, 1000);
      }

    })

    $(window).scroll(function(e) {
      var newScroll = e.currentTarget.scrollY;
      console.log(e.currentTarget.scrollY);
      if(newScroll>20){
        $("#nav").css("top","0");
        $("#nav").css("width","100%");
        $("#nav").css ("position","fixed");
      }else{
        $("#nav").attr("style","");
      }

      if(newScroll<760){
        $(".meny > ul > li > a").removeClass("activeA");
        $(".meny > ul > li > a").eq(0).addClass("activeA");
      }else if(newScroll>=760 && newScroll<999 ){
        $(".meny > ul > li > a").removeClass("activeA");
        $(".meny > ul > li > a").eq(1).addClass("activeA");
      }else if(newScroll>=999 && newScroll<=1919){
        $(".meny > ul > li > a").removeClass("activeA");
        $(".meny > ul > li > a").eq(2).addClass("activeA");
      }else {
        $(".meny > ul > li > a").removeClass("activeA");
        $(".meny > ul > li > a").eq(3).addClass("activeA");
      }


    });
    $(".about-slider > .container").slick({
      dots:true,

    })

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
