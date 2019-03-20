function obtenerPerfectos() {
    var perResultado = document.getElementById("perResultado");
  var textResultado = document.getElementById("textarea1");
    count = parseInt(document.getElementById("inCount").value);

    output = "El numero ingresado fue " + count + " --> ";
    for(var i= 2;i<=count;i++){
      b=0;
      for(var j=1;j<=Math.floor(i/2);j++){
      if(parseInt(i)%parseInt(j)==0)
      b=b+parseInt(j);
      }
      if(b==i)
      
      output +=i+",";
     
    }
    perResultado.innerHTML = ""+ output;
    textResultado.value = output;
}
