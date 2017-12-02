// $(document).ready(function(){
//   $(".switcherCarrousel").click(mostrarSlide)
//   $("#nextSlide").click(nextSlide);
//   $("#prevSlide").click(prevSlide);

// })

// function nextSlide(){
//   var idNextSlide = $(this).attr("data-nextSlide");

//   var elementoAMostrar = $("#"+idNextSlide)
//   $(".slide").css("display","none");
//   $(elementoAMostrar).show(2000);
//   idNextSlide = parseInt(idNextSlide) + 1
//   $(this).attr("data-nextSlide",idNextSlide)
// }

// function prevSlide(){
//   var prevSlide = $(this).attr("data-prevSlide");

//   var elementoAMostrar = $("#"+prevSlide)
//   $(".slide").css("display","none");
//   $(elementoAMostrar).show(2000)
// }

// function mostrarSlide(){
//   var idAMostrar = $(this).attr("data-slide")

//   var elementoAMostrar = $("#"+idAMostrar)

//   $(".slide").css("display","none");

//   $(elementoAMostrar).show(2000)

// }

$(document).ready(function(){
  $(".ver").click();
  $("#slide").toggle(1000);
})