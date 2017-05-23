		// sirve pero no oculta los otros p

// $(document).ready(function(){
//     $("#pestaña1").click(function(){
//         $("#texto1").toggle();
//     });
//     $("#pestaña2").click(function(){
//         $("#texto2").toggle();
//     });
//      $("#pestaña3").click(function(){
//         $("#texto3").toggle();
//     });
// })


$("#pestaña1").click(function(){
        $("#texto1").toggle();
        $("#texto2").hide();
        $("#texto3").hide();
    });

 	$("#pestaña2").click(function(){
        $("#texto1").hide();
        $("#texto2").toggle();
        $("#texto3").hide();
    });

 	$("#pestaña3").click(function(){
        $("#texto1").hide();
        $("#texto2").hide();
        $("#texto3").toggle();
    });
    // $("#pestaña2").click(function(){
    //     $("#texto2").show();

    // });
    //  $("#pestaña3").click(function(){
    //     $("#texto3").show();
    // });

// function boton2(){
// $("#pestaña1").click(function(){
//         $("#texto1").hidden();
//     });
//     $("#pestaña2").click(function(){
//         $("#texto2").show();
//     });
//      $("#pestaña3").click(function(){
//         $("#texto3").hidden();
//     });
//  };

