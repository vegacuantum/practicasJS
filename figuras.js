// aca interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//codigo del cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}
 console.groupEnd();

