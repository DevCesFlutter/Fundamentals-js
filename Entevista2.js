/*Amigo en común
 En un grupo de N personas, numeradas del 1 al N, algunas son amigas entre sí y otras no.
 Dada una función A(i,j), que retorna verdadero si las personas i y j son amigas (donde i y
 j son números entre 1 y N), y falso en caso contrario, programe una función comun(i,j) que,
 dadas personas i y j, devuelva verdadero si tienen un amigo en común, y falso en caso
 contrario.
 Se considera que i y j tienen un amigo en común si existe una tercera persona k que tenga
 amistad tanto con i como con j. 
Ejemplo: en un grupo de N=4 personas, existen las siguientes amistades: (1,2) (2,3) (1,4)
 1-----2
 |     |
 |     |
 4     3
 Por lo tanto las llamadas A(1,2), A(2,3) y A(1,4) dan verdadero. El orden de los
 parámetros es irrelevante: A(2,1) también da verdadero. En cambio, la llamada A(1,3) da
 falso.
 En este ejemplo,- comun(1,3) debe dar verdadero (pues tienen a la persona 2 como amigo en común).- comun(4,3) debe dar falso (no tienen un amigo en común).- comun(1,4) debe dar falso (son amigas, pero no tienen un amigo en común).
 Nota: al llamar A con parámetros idénticos, es decir A(p,p), el programa lanzará una
 excepción*/

//Arreglo con la lista de los amigos
const amigos = [
  [1, 2],
  [2, 3],
  [1, 4],
];

//funcion para ver si 2 personas son amigos
function A(a, b) {
  for (let i = 0; i < amigos.length; i++) {
    if (
      (amigos[i][0] === a && amigos[i][1] === b) ||
      (amigos[i][0] === b && amigos[i][1] === a)
    ) {
      return true;
    }
  }
  return false;
}

//Primero encontraremos los amigos de la persona a para ver que amigos tienen
// y posterior compararemos este listado de amigos si son amigos de la persona b ya 
function comun(a, b) {
  //listas de los amigos de las respectivas variables persona  a y  persona b
  let amigosDeA = [];
  let amigosDeB = [];

  //utilizamos la funcion A para ver si son amigos directos si es verdad devolvesmos falso ya que estamos viendo amigo en comun
  if (A(a, b)) return false;

  //Comprobamos que no sea el mismo valor en esta caso devolveriamos un falso
  if (a === b) return false;

  //buscamos los amigos de a y los agregamos a la lista de amigos de a
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i][0] === a) {
      amigosDeA.push(amigos[i][1]);
    }
    if (amigos[i][1] === a) {
      amigosDeA.push(amigos[i][0]);
    }
  }

  //Buscamos los amigos de b y los agregamos a la lista amigos de b
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i][0] === b) {
      amigosDeB.push(amigos[i][1]);
    }
    if (amigos[i][1] === b) {
      amigosDeB.push(amigos[i][0]);
    }
  }

  //en este punto tenemos 2 arreglos con los respectivos amigos en comun y comprobaremos
  // si existen coincidencias entre estos grupos de amigos con la funcion includes
  for (const amigo of amigosDeA) {
    if (amigosDeB.includes(amigo)) {
      return true;
    }
  }
  return false;
} //fin funcion comun

console.log(A(1, 2));
console.log(A(2, 3));
console.log(A(3, 2));
console.log(A(1, 4));
console.log(A(1, 3));
console.log(A(5, 6));
console.log(comun(1, 3));
console.log(comun(4, 3));
console.log(comun(1, 4));
console.log(comun(4, 2));
console.log(comun(4, 4));
