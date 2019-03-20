function obtenerPar(){
    var parResultado=document.getElementById("parResultado");
    var textResultado=document.getElementById("tarea");
    n1 =parseInt(document.getElementById("pares").value);
    var i;
    i=0;
    output = "El numero ingresado fue " + n1+ " --> ";
    for (i=2; i<=n1; i=i+2){
      output +=i+",";
      
    }
    parResultado.innerHTML = "" + output;
    textResultado.value = output;
}
 