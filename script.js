//SUMA
document.getElementById("sumarBtn").addEventListener("click", function() {
    // Obtener los valores de las cajas de texto
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    // Verificar si los valores son números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
      // Realizar la suma
      var resultado = num1 + num2;

      // Mostrar el resultado
      document.getElementById("Resultado").value = resultado;
    } else {
      alert("Por favor, ingrese números válidos en ambas cajas de texto.");
    }
  });
  //RESTA
  document.getElementById("restarBtn").addEventListener("click", function() {    
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
      var resultado = num1 - num2;
      document.getElementById("Resultado").value = resultado;
    } else {
      alert("Por favor, ingrese números válidos en ambas cajas de texto.");
    }
  });
  //MULTIPLICACIÓN
  document.getElementById("multiplicarBtn").addEventListener("click", function() {    
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
      var resultado = num1 * num2;
      document.getElementById("Resultado").value = resultado;
    } else {
      alert("Por favor, ingrese números válidos en ambas cajas de texto.");
    }
  });
    //DIVISIÓN
    document.getElementById("dividirBtn").addEventListener("click", function() {    
        var num1 = parseFloat(document.getElementById("numero1").value);
        var num2 = parseFloat(document.getElementById("numero2").value);
    
        if (!isNaN(num1) && !isNaN(num2)) {
          var resultado = num1 / num2;
          document.getElementById("Resultado").value = resultado;
        } else {
          alert("Por favor, ingrese números válidos en ambas cajas de texto.");
        }
      });