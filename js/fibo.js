
function on_btn_gen_click() {
  var areaResultado = document.getElementById("areaResultado");
  var textResultado = document.getElementById("textarea1");
    count = parseInt(document.getElementById("inCount").value);
    a = 0, b = 1, sum = 0;
    output = "<b>The first " + count + " elements in the Fibonacci series:</b> ";

    for(i = 0; i < count; i ++) {
        output += a + " ";
        sum = a + b;
        a = b;
        b = sum;
    }
    areaResultado.innerHTML = "" + output;
    textResultado.value = output;
   
}