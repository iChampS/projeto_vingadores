/**
 * Função jQuery para remover a ação do click
 * @author Victor Guilherme
 * 14/11/2018
 */
 
 // Caso utilize somente a biblioteca jQuery, simplificar o código (+ desempenho)
 $(document).ready(function(){
	// .click(function(){}); -> Quando clicar no objeto "<a>"
	$(".Detalhes").click(function(){
		return false;// Sem ação
	});
 });
