var botonMañana = document.getElementById('solicitudMañana');
var botonDia = document.getElementById("solicitudDia");
var botonReiniciar = document.getElementById("reiniciar")

var clima = document.getElementById("valorClima");
var tempe = document.getElementById("valorTemp");
var textoClima = document.getElementById("textoClima")
var textoTemp = document.getElementById("textoTemp")

var fecha = document.getElementById("fecha")
var textoFecha = document.getElementById("valorFecha")

var climas = ["Despejado", "Nublado", "Lluvioso"];
var doAction = true;
var notDoAction = false;
var mas = true;

botonMañana.addEventListener("click",  function(){
    mas = false;
    textoFecha.innerHTML = fecha.value;
    

    textoClima.innerHTML = " Clima de la mañana será: "
    setTimeout(generarAleatorios, 1500, doAction, notDoAction)

    textoTemp.innerHTML = " Temperaturá promedio será de:"
    setTimeout(generarAleatorios, 3000, notDoAction, doAction)

   
});


botonDia.addEventListener("click", function(){
    mas = true;
    textoFecha.innerHTML = fecha.value;


   

    textoClima.innerHTML = " Clima de la mañana será: "
    setTimeout(generarAleatorios, 1500, doAction, notDoAction)


    document.getElementById("clima2").innerHTML = " Clima de la tarde será: "
    setTimeout(generarAleatorios, 1500, doAction, notDoAction)

    document.getElementById("clima3").innerHTML = " Clima de la noche será: "
    setTimeout(generarAleatorios, 1500, doAction, notDoAction)



    textoTemp.innerHTML = " Temperaturá promedio será de:"
    setTimeout(generarAleatorios, 3000, notDoAction, doAction)
})

botonReiniciar.addEventListener("click",  function(){
    mas = false;
    fecha.value = ("")
    textoFecha.innerText = ""
    textoClima.innerText = "Clima"
    textoTemp.innerText = "Temperatura"
    clima.innerText = ""
    tempe.innerText = ""

    document.getElementById("valorClima2").innerHTML = "";
    document.getElementById("valorClima3").innerHTML = "";
    document.getElementById("clima2").innerHTML = ""
    document.getElementById("clima3").innerHTML = ""
})


function generarAleatorios(darClima, darTemperatura){
    if (darTemperatura){
        var temperaturaInd = Math.floor(Math.random() * (30 - 5 + 1) + 5);
        tempe.innerHTML = temperaturaInd + " °C"
 
    } 
    if (darClima){
        var climaInd = climas[Math.floor(Math.random()*climas.length)];
        clima.innerHTML = climaInd
        if (mas) {
            document.getElementById("valorClima2").innerHTML = climas[Math.floor(Math.random()*climas.length)];
            document.getElementById("valorClima3").innerHTML = climas[Math.floor(Math.random()*climas.length)];
        }
    }


}

