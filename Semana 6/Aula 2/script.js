function limpar() {
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('resultado').value = "";
  }
  
  function validarValores(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Por favor, digite apenas números.");
      return false;
    }
    return true;
  }
  
  function somar() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
  
    if (!validarValores(valor1, valor2)) {
      return;
    }
  
    const resultado = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById('resultado').value = resultado;
  }
  
  function subtrair() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
  
    if (!validarValores(valor1, valor2)) {
      return;
    }
  
    const resultado = parseFloat(valor1) - parseFloat(valor2);
    document.getElementById('resultado').value = resultado;
  }
  
  function multiplicar() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
  
    if (!validarValores(valor1, valor2)) {
      return;
    }
  
    const resultado = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById('resultado').value = resultado;
  }
  
  function dividir() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
  
    if (!validarValores(valor1, valor2)) {
      return;
    }
  
    if (valor2 == 0) { // Verificação de divisão por zero
      alert("Não é possível dividir por zero.");
      return; 
    }
  
    const resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById('resultado').value = resultado;
  }