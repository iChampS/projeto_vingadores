/**
 * Fixando um objeto com jQuery (<nav>)
 * @author Victor Guilherme
 * 14/11/2018
 */
  
 // Este exemplo mostra o jQuery atuando diretamente no CSS
 // A linha abaixo obtem as coordenadas do objeto identificado pela classe .Menu e armazena estas coordenadas na variável posição
 //.offset().top -> distância do objeto até o topo da página
 var posicao = $('.Menu').offset().top;
 // A linha abaixo cria uma variável para manipular a classe que fixa o menu (Fixar) dentro do CSS
 // Fixar -> Menu
 var $meuMenu = $('.Menu');
 $(document).ready(function(){
	// Função jQuery que manipula o scroll
	$(document).on('scroll', function(){
	// A estrutura abaixo compara a posição do objeto (.Menu) com o topo do site ao acionar o scroll (.on)
		// Se posição menor ou igual ao topo do site
		if(posicao <= $(window).scrollTop()){
			$meuMenu.addClass('Fixar'); // Fixa o menu
		}else{
			$meuMenu.removeClass('Fixar'); // Fixa o menu
		}
	});	
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 