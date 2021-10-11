
function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount(){
    const imputPrice = document.getElementById("ImputPrice");
    const priceValue = imputPrice.value;
    console.log(priceValue);

    const ImputDiscont = document.getElementById("ImputDiscont");
    const priceDescont = ImputDiscont;
    console.log(priceDescont)
   

    const precioDescuento = calcularPrecioDescuento(priceValue, imputDiscount);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "precio del descuento es $"+precioDescuento;
 

}