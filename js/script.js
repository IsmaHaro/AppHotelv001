var hotel = {
	principal: function(){
		document.addEventListener("deviceready", hotel.inicio, false);
	},
	inicio: function(){
		$("#btn-inicio-sesion").click(hotel.iniciarSesion);
	},
	iniciarSesion: function(){
		var email    = $("#email-inicio").val();
		var password = $("#password-inicio").val();

		try{
			if(email == ""){
				throw new Error("El email no es valido");
			}

			if(password == ""){
				throw new Error("La contraseña no es valida");
			}

			if(email == "isma@gmail.com" && password == "123"){
				window.location.href = "#main";
			
			}else{
				throw new Error("No existe tu cuenta, inténtalo de nuevo");
			}

		}catch(error){
			alert(error);
		}
	}
};

// METODO PARA COMPILAR
hotel.principal();

// METODO PARA DESARROLLAR
// hotel.inicio();