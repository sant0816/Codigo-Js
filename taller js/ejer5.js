const tareas = [];

const listaTareas = document.getElementById('listaTareas');
const NuevaTarea = document.getElementById('nuevaTarea');
const botonAgregarTarea = document.getElementById('agregarTarea');

const renderizarTareas = () => {
    
    listaTareas.innerHTML = '';

    tareas.map((tarea, eliminar) => {
        const li = document.createElement('li');
        li.textContent = tarea; 
        
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => {
            eliminarTarea(eliminar);
        };

        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
};

const agregarTarea = () => {
    const nuevaTarea =NuevaTarea.value.trim();
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        NuevaTarea.value = ''; 
        renderizarTareas(); 
    }
};

const eliminarTarea = (eliminar) => {
    tareas.splice(eliminar, 1); 
    renderizarTareas(); 
};

botonAgregarTarea.onclick = agregarTarea;