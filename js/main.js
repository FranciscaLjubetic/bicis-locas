function validateForm(){
	/* Escribe tú código aquí */
	const name= $('#name').val().trim();//trim es para sacar los espacios

	console.log(name);

	if(name == ''){
		$('#name').parent().append('<span> El nombre no puede ser vacío </span>');
	}//NOMBRE

	const lastname = $('#lastname').val().trim();//trim es para sacar los espacios
	if(lastname == ''){
		$('#lastname').parent().append('<span> El apellido no puede ser vacío </span>');
		console.log(lastname);
		
	}//APELLIDO
	//*	if(name[o].tuUpercase() !== name[0]){		$('#lastname').remove(); $('#lastname').parent().append('<span> El apellido debe comenzar con mayúscula </span>');}*//


	const email = $('#input-email').val().trim();//trim es para sacar los espacios
	if(email == ''){
		$('#input-email').parent().append('<span> El mail no puede ser vacío </span>');
		console.log(email);
	}//MAIL

	const password = $('#input-password').val().trim();//trim es para sacar los espacios
	if(password == ''){
		$('#input-password').parent().append('<span>La contraseña no puede ser vacío </span>');
		console.log(password);
	}//CONTRASEÑA

	const twiter = $('#input-social').val().trim();//trim es para sacar los espacios
	if( twiter == ''){
		$('#input-password').parent().append('<span> La cuenta de twitter no puede estar vacía </span>');
		console.log(twiter);
	}//twitter

	
}