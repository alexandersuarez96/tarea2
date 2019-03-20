function obtenerFibonacci() {
    var fResultado = document.getElementById("fResultado");
  var textResultado = document.getElementById("textarea1");
    count = parseInt(document.getElementById("inCount").value);
    a = 0, b = 1, sum = 0;
    output = "El numero ingresado fue " + count + " --> ";

    for(i = 0; i < count; i ++) {
        output += a + " ";
        sum = a + b;
        a = b;
        b = sum;
    }
    fResultado.innerHTML = "" + output;
    textResultado.value = output;
    
}