function validateForm(){
	/* Escribe tú código aquí */
	const name= $('#name').val().trim();//trim es para sacar los espacios
	console.log(name);

	if(name == ''){
		$('name').parent().append('<span> El nombre no puede ser vacío');
		alert('el nombre no puede ser vacío')

	}
	if(name[o].tuUpercase() == name[0])
}