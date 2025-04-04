function somar(a, b) {
    return a + b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function divisão (a, b) {
    return a / b;
}

function subtração(a, b) {
    return a - b;
}


  
  function ehPar(num) {
    return num % 2 === 0;
  }

  function contarCaracteres(texto){
    return(`A string ${texto} possui ${texto.length} caracteres`)
} 
  

    
 function multi(a, b, c ){
    return a * b * c
 }

 function mult(a, b ){
    return a * b
    }

    function divi(a, b) {
        return a / b;
    }






module.exports = {somar, multiplicar, divisão, subtração, contarCaracteres, ehPar, multi, mult, divi}
