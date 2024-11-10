// Se espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  // Obtener botones
  const btnIngresar = document.getElementById('btnIngresar');
  const btnRegistrarse = document.getElementById('btnRegistrarse'); // Enlace de "Registrarse"
  const enlaceRegistrarse = document.querySelector('.registrarse-link'); // Enlace de "Registrarse"
  const btnVolverIngreso = document.querySelector('.volver-ingreso-link'); // Enlace de "Volver a Ingresar"
  const btnSalir = document.getElementById('btnSalir');
  // Obtenemos los elementos del formulario y de la barra de navegación
  const formularioIngreso = document.getElementById('ingreso');
  const formularioRegistro = document.getElementById('registro');
  const barraNavegacion = document.getElementById('barra_navegacion');
  const body = document.getElementById('fondo');
  const divNoticias = document.getElementById('noticias');
  // Obtenemos todos los enlaces de la barra de navegación
  const enlaces = document.querySelectorAll('.navbar-nav .nav-link:not(#tooglePublicidad):not(#miCuenta)');
  // Variable para almacenar el último div visible
  let ultimoDivVisible = null;

  // Evento para cambiar de formulario
  enlaceRegistrarse.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto (navegar a otra página)
    // Ocultar el formulario de ingreso
    formularioIngreso.style.display = 'none';
    formularioRegistro.hidden = false;
    // Mostrar el formulario de registro
    formularioRegistro.style.display = 'flex';
  });

  // Cambiar de registro a ingreso
  btnVolverIngreso.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto
    // Ocultar el formulario de registro
    formularioRegistro.style.display = 'none';
    // Mostrar el formulario de ingreso
    formularioIngreso.style.display = 'flex';
  });

  // Se agrega un evento de clic al botón "Ingresar"
  btnIngresar.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    // Se oculta el formulario de ingreso y se muestra la barra de navegación
    formularioIngreso.style.display = 'none';
    barraNavegacion.hidden = false;
    // Se quita el color de fondo del body
    body.style.backgroundColor = 'transparent'; // O eliminar la propiedad si prefieres dejarla vacía
    divNoticias.hidden = false; // Mostrar siempre el div de Noticias
  });

  // Se agrega un evento de clic al botón "Ingresar"
  btnRegistrarse.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    // Se oculta el formulario de ingreso y se muestra la barra de navegación
    formularioRegistro.style.display = 'none';
    barraNavegacion.hidden = false;
    // Se quita el color de fondo del body
    body.style.backgroundColor = 'transparent'; // O eliminar la propiedad si prefieres dejarla vacía
    divNoticias.hidden = false; // Mostrar siempre el div de Noticias
  });

  // Se agrega un evento de clic al botón "Salir"
  btnSalir.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    // Se oculta la barra de navegación y se muestra el formulario de ingreso
    barraNavegacion.hidden = true;           // Se oculta la barra de navegación
    divNoticias.hidden = true; // Ocultar el div de Noticias
    // Ocultar el último div visible
    if (ultimoDivVisible) {
      ultimoDivVisible.hidden = true;
      ultimoDivVisible = null; // Resetear para que al ingresar de nuevo no muestre un div automáticamente
    }
    formularioIngreso.style.display = 'flex';  // Se muestra el formulario de ingreso (cambiamos 'none' por 'block')
    // Se vuelve a aplicar el color de fondo al body
    body.style.backgroundColor = 'rgba(167, 139, 250, 1)';  // Vuelve a poner el fondo original
  });

  // Añadimos el evento de clic a cada enlace
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que se realice la navegación del enlace

      // Primero, ocultamos todos los divs de contenido (pero no la barra de navegación ni el footer)
      // const divs = document.querySelectorAll('div[id]:not(#barra_navegacion):not(#ingreso):not(#registro):not(#footer):not(#autores)');
      const noticias = document.getElementById('noticias');        
      noticias.hidden = true
      const anuncios = document.getElementById('anuncios');
      anuncios.hidden = true;        
      const trabajos = document.getElementById('trabajos');
      trabajos.hidden = true;        
      const cambiarContrasena = document.getElementById('cambiarContrasena');
      cambiarContrasena.hidden = true;   
      const verSolicitudes = document.getElementById('verSolicitudes');
      verSolicitudes.hidden = true;        
      const otrosMiCuenta = document.getElementById('otrosMiCuenta');
      otrosMiCuenta.hidden = true;        
      // const carouselExampleDark = document.getElementById('carouselExampleDark');        
      /* divs.forEach(div => {
        if (div.id != 'carouselExampleDark')
        {
          div.hidden = true;
        }
        
      });*/

      // Ahora mostramos el div correspondiente al enlace clicado
      const targetId = this.getAttribute('href').substring(1); // Obtener el id del div desde el href (ej: #noticias)
      const targetDiv = document.getElementById(targetId);      
        if (targetDiv) {
        targetDiv.hidden = false; // Mostrar el div
        // Actualizar el último div visible
        ultimoDivVisible = targetDiv;
      }
    });
  });

});
