// Pedimos al usuario su numero de tarjeta
var giveMeOneCardNumber = prompt ('Ingrese sú numero de tarjeta');
console.log (parseInt(giveMeOneCardNumber));
// creamos un arrleglo vacío para despues llenarlo con los digitos que nos da el usuario y lo imprimimos
  var arr =[];

  for (i = 0; i<=giveMeOneCardNumber.length; i++) {
      arr.push(giveMeOneCardNumber.charAt(i));
      console.log(arr[i]);
    }
// volteamos el arreglo para que los números esten a la inversa pues así lo marca la fórmula.

var turn = arr.reverse();
console.log (arr);
var otherArr=[];

  /*hay que separar los números que ocupan las posiciones pares para luego multiplicarlos por dos y en caso que den más que 10, sumar ambos digitos
  for (i = 2; i<=turn.length; i= +2) {
    turn.push(turn.charAt(i));
      console.log(other[i]);
    }
*/
