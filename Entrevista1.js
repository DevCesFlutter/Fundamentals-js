/*1.- Robot
 Un robot que se mueve sobre una línea está diseñado para recibir las instrucciones I y D que
 harán que se mueva 1 metro a la izquierda o a la derecha, respectivamente.
 Izq <------ Robot ------> Der
 Por ejemplo, si se le da la instrucción IIDD, el robot se moverá dos metros a la izquierda y
 luego dos metros a la derecha, volviendo al mismo lugar donde comenzó. En cambio, si se le
 da la instrucción DDD, quedará tres metros a la derecha de donde comenzó.
 Dada una secuencia de instrucciones en un string, programe una función

 vuelve(instrucciones) que retorne verdadero si dichas instrucciones devuelven al robot
 al mismo lugar donde comenzó, y falso en caso contrario.
 Ejemplos de resultados esperados:
 vuelve("IIIIDDDD") => verdadero
 vuelve("IDID"    ) => verdadero
 vuelve(""        ) => verdadero
 vuelve("DDD"     ) => falso
 vuelve("IIID"    ) => falso
 vuelve("DIDII"   ) => falso
*/
//creamos la funcion inicial pidiendo el parametro de instrucciones
function vuelve(instrucciones) {
  //declaramos una variable para comprobrar una condicion y la posicion inicial del robot que es 0
  let bool = true;
  let robot = 0;
  //evaluamos las intrucciones recorriendolas letra por letra mediante un bucle for
  for (let i = 0; i < instrucciones.length; ++i) {
    //si dentro de intrucciones viene una letra d mayuscula avanza +1
    if (instrucciones[i] === "D") {
      robot++;
      //si dentro de intrucciones viene una letra d mayuscula avanza -1
    } else if (instrucciones[i] === "I") {
      robot--;
    }
  }
  //si robot es diferente de la pocicion inicial devuelve un falso
  if (robot !== 0) {
    bool = false;
    return console.log(bool);
  } else {
    //de lo contrario devolvemos un true lo que significa que si es 0 es true
    bool = true;
    return console.log(bool);
  }
}

//Casos de prueba
vuelve("IIIIDDDD"); //=> verdadero
vuelve("IDID"); // => verdadero
vuelve(""); // => verdadero
vuelve("DDD"); //=> falso
vuelve("IIID"); //=> falso
vuelve("DIDII"); //=> falso
