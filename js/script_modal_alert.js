function modAlert(msg){
	$("#msg-alert").html(msg);
	$("#container-box-alert").fadeIn("speed");
	$("#modal-alert").fadeIn("speed");

	$("#btn-alert").click(function(){
		$("#modal-alert").fadeOut("speed");
		$("#container-box-alert").fadeOut("speed");		
	});
}