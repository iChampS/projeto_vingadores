/** 
 * Criando um menu responsivo com jQuery
 * @author Victor Guilherme
 * 14/11/2018
 */
 
$(document).ready(function(){
	// Quando o objeto da classe .Mobile for clicado
	$('.Mobile').click(function(){
		// A linha abaixo altera o estado para nav ul (1° nivel)
		$('nav > ul').slideToggle();		
	});
 	// A função abaixo resolve o problema de "sumir" o menu quando aumenta a resolução da tela responsivo -> desktop
	// (window).resize -> Redimensionar a janela do navegador
	$(window).resize(function(){
		if($(window).width() > 480){ // Se resolução maior que 480 px
			$('nav ul').removeAttr('style');			
		}
	});
 	// Solução do 2° nível mobile
	$('.Detalhes').click(function(){
		if($(window).width() <= 480){// Só aplicar este efeito no mobile
			$('nav li:hover ul').slideToggle();
		}
	});
});
 
 
 
 
 
 