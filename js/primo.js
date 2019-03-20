function obtenerPrimo() {
    var pResultado = document.getElementById("pResultado");
  var textResultado = document.getElementById("textarea1");
    count = parseInt(document.getElementById("inCount").value);
   
    output = "El numero ingresado fue " + count + " --> ";
    var m,bandera;
  
    for (var i=2;i <=count;i++){
        m =2;
        bandera=true;
    
        while(bandera && m <i){
            if(i%m==0){
                bandera=false;
            }else{m =m+1;}
    
            }
        if(bandera && count>1)
        output +=i+",";}
    pResultado.innerHTML = ""+ output;
    textResultado.value = output;
}


