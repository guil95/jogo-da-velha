
var vencedor = false;
var venceX = 0;
var venceO = 0;
var empate = 0;
$(document).ready(function(){

	$("#t1 td").text("");

	$("#venceX").html("Vitórias 'X' : ");
	$("#venceO").html("Vitórias 'O' : ");
	$("#empate").html("Velha : ");

    var player = verificaJogadorInicial();
    $(".selecao").click(function(){
    	var selecao = $("input:checked").val();
    	switch(selecao){
    		case 1:
    			 player = verificaJogadorInicial();
    		break;
    		case 'O':
    			player = 'X';
    		break;
    		case 'X':
    			player = 'O';
    		break;
    	}
    })
    $("#limparCampos").click(limparCampos);

	$("#t1 td").click(function(){	

		$(".selecao").attr({disabled: true});	
		//console.log(vencedor)
		if(vencedor == false){
		if($(this).text() == ""){
			player = player == "X" ? "O" : "X";

			$(this).text(player);

			console.log(player)
			if(player === 'X'){
				$(this).addClass(player);
			}else{
				$(this).addClass(player)
			}
			
			var verificar = verificarGanhador();
			if(verificar === true){
				// $("body").append("<br>O jogador '" +player + "' Ganhou");
				alert(player + " Ganhou");
				vencedor = true;
				if(player == 'X'){
					venceX++;
					$("#venceX").html("Vitórias 'X' : "+venceX);
				}else{
					venceO++;
					$("#venceO").html("Vitórias 'O' : "+venceO);
				}
				// $(".selecao").attr({disabled: false});
				return;
			}

			if(verificar === "velha"){
				alert("Deu velha")
				$("body").append("Deu Velha");
				empate++;
					$("#empate").html("Velha: "+empate);
				// $(".selecao").attr({disabled: false});	
				vencedor = true;
			}
		}
	}

	});
});

var verificaJogadorInicial = () => {
	var jogador = ["X", "O"];
	var jogadorInicial = jogador[Math.floor(Math.random() * jogador.length)];

	return jogadorInicial;
};

var verificarGanhador = () => {
	//se ganhou return true;
	var marcadores = [];
	$("#t1 td").each(function(){
		marcadores.push($(this).text());

	});
	//console.log(marcadores)
	
	if(marcadores[0] != "" &&  marcadores[1] != "" && marcadores[2] != ""){
		if(marcadores[0] == marcadores[1] && marcadores[0] == marcadores[2]){
			return true;
		}
	}
	if(marcadores[3] != "" &&  marcadores[4] != "" && marcadores[5] != ""){
		if(marcadores[3] == marcadores[4] && marcadores[3] == marcadores[5]){
			return true;
		}
}
   if(marcadores[6] != "" &&  marcadores[7] != "" && marcadores[8] != ""){
	if(marcadores[6] == marcadores[7] && marcadores[6] == marcadores[8]){
		return true;
	}
}
if(marcadores[0] != "" &&  marcadores[3] != "" && marcadores[6] != ""){
	if(marcadores[0] == marcadores[3] && marcadores[0] == marcadores[6]){
		return true;
	}
}
if(marcadores[4] != "" &&  marcadores[1] != "" && marcadores[7] != ""){
	if(marcadores[1] == marcadores[4] && marcadores[1] == marcadores[7]){
		return true;
	}
}
if(marcadores[2] != "" &&  marcadores[5] != "" && marcadores[8] != ""){
	if(marcadores[2] == marcadores[5] && marcadores[2] == marcadores[8]){
		return true;
	}
}
if(marcadores[0] != "" &&  marcadores[4] != "" && marcadores[8] != ""){
	if(marcadores[0] == marcadores[4] && marcadores[0] == marcadores[8]){
		return true;
	}
}
if(marcadores[2] != "" &&  marcadores[4] != "" && marcadores[6] != ""){
	if(marcadores[2] == marcadores[4] && marcadores[2] == marcadores[6]){
		return true;
	}
}

if(marcadores[0] != "" &&  marcadores[1] != "" && marcadores[2] != "" && marcadores[3] != "" &&  marcadores[4] != "" && marcadores[5] != "" && marcadores[6] != "" &&  marcadores[7] != "" && marcadores[8] != ""){
	return "velha";
}
	
	return false;
};

var limparCampos = () => {
	$("#t1 td").each(function(){
		$(this).text("");
		$(this).removeClass();
	});
	 $('input[type="radio"]').each(function(){
       $(this).prop('checked', false);
  });

	$(".selecao").attr({disabled: false});
	vencedor = false;
}