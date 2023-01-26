//crear variables para buscar los elementos por el "id"
var textin = document.getElementById("textoingresado");
var textout = document.getElementById("textoegresado");
var bcopia = document.getElementById("copiartexto");
//crear validacion del texto 

function validar()
{
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
    }

    var textin = String(document.getElementById("textoingresado").value).trim();

    
    if (regxs.lower.test(textin)) return true;
    
    if(regxs.upper.test(textin) || regxs.upperLower.test(textin))
    {
        alert("Solo puedes escribir con minusculas");
        return false;
    }
}

//crear funciones 
function encriptar()
{
    if(validar()){
        textoegresado.style.display="block";
        copiartexto.style.display="block";
        var textin = document.getElementById("textoingresado").value.toLowerCase();
        var textos = document.getElementById("textos")

        var mensaje=textin.replace(/e/img,"ent").replace(/i/img,"img").replace(/a/img,"alt").replace(/o/img,"obd").replace(/u/img,"utf");   //modificar el texto
        textin.value=mensaje;
        textoegresado.value=mensaje;
        //console.log(mensaje);
        textos.style.display="none";
    }

}

function desencriptar()
{
    if(validar()){
        textoegresado.style.display="block";    //mostrar cuadro de texto de salida 
        var textin = document.getElementById("textoingresado").value.toLowerCase(); //leer texto ingresado
        var textos = document.getElementById("textos")      
        var mensaje=textin.replace(/ent/img,"e").replace(/img/img,"i").replace(/alt/img,"a").replace(/obd/img,"o").replace(/utf/img,"u");   //modificar el texto
        textin.value=mensaje;   //guardar texto modificado
        textoegresado.value=mensaje;    //mostrar texto modificado 
        //console.log(mensaje);
        textos.style.display="none";    //ocultar letrar 
    }
}

function copiar()
{
    var textin = textoegresado.value;       //coger texto
        navigator.clipboard.writeText(textin);      //copiar texto 
}