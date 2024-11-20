let nivelRiesgo=(edad, enfermedadesPrevias) => {
    let resultado= (edad > 60 || enfermedadesPrevias)?"Alto riesgo":(edad >= 40 && edad <= 60 || enfermedadesPrevias)?"Riesgo moderado":"bajo riesgo"
        return resultado;
}
export{nivelRiesgo}