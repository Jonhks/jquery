var $reloj = new Date();
	var $hora = $reloj.getHours();
	var $minuto = $reloj.getMinutes();
	var $segundos = $reloj.getSeconds();
	var $horaExacta = ($hora + ":" + $minuto + ":" + $segundos);


		console.log($reloj);


	$("#mensaje").keyup(function(){
		var $comentario = $("#mensaje").val();
		var $numCaract = $comentario.length;
		$(".enviar").click(function(){
			$(".agregarDiv").html("<p>"+$comentario+"</p>" + "<p>"+$horaExacta+"</p>").css("display","block");
		});
		var $numMaxCaract =  140;
		var $total = $numMaxCaract-$numCaract;
		$(".caracteres").html($total);

		if ($total < 130){
			$(".caracteres").css("color","red");
		}else{
			$(".caracteres").css("color","blue");
		};

		if ($total <= 139) {
			$(".enviar").removeClass("disabled");
		};
	});

	

		
		