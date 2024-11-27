
const usuarios = [
    { nombre: "Marcos Pérez", edad: 38, email: "marcos@gmail.com" },
    { nombre: "Maria López", edad: 35, email: "maria@gmail.com" },
    { nombre: "Luisa García", edad: 25, email: "luisa@gmail.com" }
];


const tbody = document.querySelector('#usertable tbody');

const filas = usuarios.map(usuario => {
    return `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
        </tr>
    `
}).join(''); 

tbody.innerHTML = filas;
