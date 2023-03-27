window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle2 = document.body.querySelector('#sidebarToggle2');
    if (sidebarToggle2) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle2.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

const MAXIMO_TAMANIO_BYTES = 4000000; // 4MB = 4 millones de bytes
const inputFLIR = document.querySelector('#inputFLIR');
inputFLIR.addEventListener('change', function(){
    if(this.files.length <= 0) return;
    const archivo = this.files[0];
    if (archivo.size > MAXIMO_TAMANIO_BYTES) {
		const tamanioEnMb = MAXIMO_TAMANIO_BYTES / 4000000;
		alert(`El tamaño máximo es 4 MB`);
		// Limpiar
		$miInput.value = "";
	} else {
		// Validación pasada. Envía el formulario o haz lo que tengas que hacer
	}
})
