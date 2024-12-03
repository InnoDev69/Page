document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    
    downloadBtn.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para iniciar la descarga
        // Por ahora, solo mostraremos una alerta
        alert('¡Gracias por tu interés! La descarga comenzará pronto.');
        
        // Si tienes un archivo para descargar, puedes usar algo como esto:
        // window.location.href = 'ruta/al/archivo/aplicacion.zip';
    });
});