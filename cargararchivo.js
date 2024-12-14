const imageInput = document.getElementById('imageInput');
        const carouselContent = document.getElementById('carouselExampleDark');
        const toastElement = document.getElementById('successToast');
        // Inicializar el toast de Bootstrap
        const toast = bootstrap.Toast.getOrCreateInstance(toastElement);

        imageInput.addEventListener('change', (event) => {
            const files = event.target.files;
            carouselContent.innerHTML = ''; // Limpiar carrusel

            Array.from(files).forEach((file, index) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // Crear un contenedor para la imagen
                    const carouselItem = document.createElement('div');
                    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                    carouselItem.innerHTML = `
                        <img src="${e.target.result}" class="img-fluid w-25 h-50" alt="Imagen ${index + 1}">
                    `;
                    carouselContent.appendChild(carouselItem);
                };

                reader.readAsDataURL(file); // Leer archivo como base64
                toast.show();
            });
        });