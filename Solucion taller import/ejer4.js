let nivelRiesgo=(edad, enfermedadesPrevias) => {

    let resultado= (edad > 60 || enfermedadesPrevias)?"Alto riesgo":(edad >= 40 && edad <= 60 || enfermedadesPrevias)?"Riesgo moderado":"bajo riesgo"
        return resultado;
    }

console.log(nivelRiesgo(65, true));   
console.log(nivelRiesgo(45, false));    
console.log(nivelRiesgo(30, false));   
console.log(nivelRiesgo(45, false));   
console.log(nivelRiesgo(70, false));   