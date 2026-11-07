// Crear la funcion saludar. que llama el boton en el HTML
function saludar(){
    let varNombre =document.getElementById("nombre").value;

//Mostrar resultado en input con id="resultado"
document.getElementById("resultado").value=`Hola, ${varNombre}`;
}

function registrar() {
    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;

    // 1. Mostrar los datos en una ventana emergente
    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);

    // 2. Mostrar la información en un input
    document.getElementById("resultado11").value = `${nombre} - ${programa}`;

    // 3. Mostrar texto utilizando innerText
    document.getElementById("resultado22").innerText = `Nombre: ${nombre} | Programa: ${programa}`;

    // 4. Mostrar contenido HTML con formato 
    document.getElementById("resultado33").innerHTML = `<p style="color: black;"> 
    <strong>Aprendiz:</strong> ${nombre}<br> 
    <strong>Programa:</strong> ${programa}</p>`;


// 5. Mostrar texto utilizando textContent
    document.getElementById("resultado44").textContent = `El Aprendiz ${nombre} está inscrito en ${programa}.`; 
}

function calcularOperaciones(){
    let n1=parseInt(document.getElementById("valorUno").value);
    let n2=parseInt(document.getElementById("valorDos").value);

    document.getElementById("resultado_suma").innerText=`Resultado suma: ${n1+n2}`;

    document.getElementById("resultado_resta").innerText=`Resultado resta: ${n1-n2}`;

    document.getElementById("resultado_multiplicacion").innerText=`Resultado multiplicacion: ${n1*n2}`;

    document.getElementById("resultado_division").innerText=`Resultado division: ${n1/n2}`;

}