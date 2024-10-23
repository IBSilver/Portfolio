document.getElementById('demo-category').addEventListener('change', function() {
    var selectedCategory = this.value;

    // Ocultar todas las categorías
    document.querySelectorAll('.features').forEach(function(section) {
        section.style.display = 'none'; // Ocultar todo
    });

    // Mostrar solo las que coincidan con la categoría seleccionada
    if (selectedCategory === "") {
        // Mostrar todas si se selecciona "All"
        document.querySelectorAll('.features').forEach(function(section) {
            section.style.removeProperty('display'); // Restaurar el estilo original
        });
    } else {
        // Mostrar las secciones filtradas
        document.querySelectorAll('.category-' + selectedCategory).forEach(function(section) {
            section.style.removeProperty('display'); // Restaurar el estilo original
        });
    }
});