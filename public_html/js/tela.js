/**
 * Medição de tela (final da página)
 * @author Victor Guilherme
 * 14/11/2018
 */

var largura = (window.innerWidth > 0) ? window.innerWidth:screen.width;
var altura = (window.innerHeight > 0) ? window.innerHeight:screen.height;
document.write(largura + " x " + altura);
