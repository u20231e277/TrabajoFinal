function openMenu() {
    document.getElementById("menu").style.width = "250px"; // Ajustar el ancho deseado del menú
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}



function showResults() {
    // Mostrar la sección de resultados
    document.getElementById('results-section').style.display = 'block';
}

function selectTime(button) {
    // Obtener el texto del botón seleccionado
    var selectedTime = button.innerText;
    
    // Ocultar la sección de resultados y mostrar la sección de confirmación
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'block';
    
    // Mostrar el horario seleccionado en la sección de confirmación
    document.getElementById('selected-time').innerText = selectedTime;
}
