$(document).ready(function(){

    $("#biograp").click(function(){
      $(".education").css("display","none");
      $(".works").css("display","none");
      $(".expersion").css("display","none");
      $(".biograp").toggle("slow");

      $("#education").attr("class","");
      $("#works").attr("class","");
      $("#expersion").attr("class","");
      $("#biograp").attr("class","active");
    })
    $("#education").click(function(){
      $(".biograp").css("display","none");
      $(".works").css("display","none");
      $(".expersion").css("display","none");
      $(".education").toggle("slow");

      $("#biograp").attr("class","");
      $("#works").attr("class","");
      $("#expersion").attr("class","");
      $("#education").attr("class","active");


    })
    $("#works").click(function(){
      $(".biograp").css("display","none");
      $(".education").css("display","none");
      $(".expersion").css("display","none");
      $(".works").toggle("slow");

      $("#biograp").attr("class","");
      $("#expersion").attr("class","");
      $("#education").attr("class","");
      $("#works").attr("class","active");
    })
    $("#expersion").click(function(){
      $(".biograp").css("display","none");
      $(".works").css("display","none");
      $(".education").css("display","none");
      $(".expersion").toggle("slow");

      $("#biograp").attr("class","");
      $("#works").attr("class","");
      $("#education").attr("class","");
      $("#expersion").attr("class","active");

    })

})
