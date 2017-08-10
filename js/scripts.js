$(document).ready(function() {
  $("#turkey").click(function(){
    $(".turkey").toggle();
    $(".chicken").hide();
    $(".chicken").hide();

    $("#chicken").toggle();
    $("#snake").toggle();
  });
  $("#chicken").click(function(){
     $(".chicken").toggle();
     $(".snake").hide();
     $(".turkey").hide();

     $("#turkey").toggle();
     $("#snake").toggle();
  });
  $("#snake").click(function(){
    $(".snake").toggle();
    $(".turkey").hide();
    $(".chicken").hide();

    $("#chicken").toggle();
    $("#turkey").toggle();
  });

});
