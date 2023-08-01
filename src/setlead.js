function setLead()
{
	var caminho = $("#path").val();
	var id_cadastro_crm = $("#id_cadastro_crm").val();
	
	var dados = $('form.formLead, form').serialize();
	dados = 'id_cadastro_crm=' + id_cadastro_crm + '&' + dados;
	// console.log(dados);
	$.ajax({
		url: caminho+'ajax/lead.php', 
		type: 'POST', 
		data: dados, 
		dataType: 'json',
		error: function(data)
		{
			// console.log('Error');
			// console.log(data);
		},
		success: function(data)
		{
			console.log('Success');
			// console.log(data);
		}
	});
}

$("form.formLead .scl, form .scl").on('blur', function(){
	setLead();
})