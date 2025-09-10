/*3.- Palabra más frecuente

 Dado un texto y una lista de palabras a ignorar, 
 programe una función palabra_mas_frecuente(texto, lista_a_ignorar) 
 que encuentre la palabra que
 aparezca más veces en dicho texto y que no esté en la lista de palabras a ignorar.
 No se debe distinguir por mayúsculas y minúsculas: "hola" debe ser considerado igual a
 "HOLA".
 Por ejemplo:
 texto = "Vamos caminando por una villa llena de casas. Una a una 
visitamos las CASAS que encontramos"
 lista_a_ignorar = ["una"]
 Resultado esperado: palabra_mas_frecuente(texto, lista_a_ignorar) debe
 entregar "casas"
 Explicación: la palabra "una" aparece tres veces, pero está en la lista de palabras a ignorar.
 La palabra "casas" aparece dos veces, y el resto de las palabras aparece una sola vez. Notar
 que "casas" aparece en minúsculas y mayúsculas, pero esto no los hace palabras distintas.
 Notar también que no se toma en cuenta la puntuación, como en "casas.", que tiene un
 punto contiguo a la palabra*/
//declaramos la variable que contiene el texto y la variable con la lista de palabras a ignorar

//configuramos 2 constantes con los valores de prueba del ejercicio
const texto =
  "Vamos caminando por una villa llena de casas. Una a una visitamos las CASAS que encontramos";
const lista_a_ignorar = ["una", "vamos", "por"];
//funcion que pide 2 parametros
function palabra_mas_frecuente(texto, lista_a_ignorar) {
  //limpiamos el texto pasandolo a minuscula y separando por espacio tambien quitamos los espacios en blanco
  const palabras = texto
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/)
    .filter((palabras) => palabras.length > 0);
//limpiamos la lista a ignorar mapeando el array inicial y aplicando funciones para normalizar el texto
  const lista_a_ignorar_limpia = lista_a_ignorar.map((palabra) =>
    palabra.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  );
  //creamos una variable con una funcion filter para crear un nuevo array
  //si pasan el filtro de de estar en la lista las incluye y se niegan 
  // por lo que no se agregan las palabras que no esten en la lista
  const palabras_filtradas = palabras.filter((palabra) => !lista_a_ignorar_limpia.includes(palabra)
  );
  //creamos un objeto vacion que servira como contador 
  let frecuencia = {};
  //si es primera vez inicia su contador en 1 , si ya existe incrementa en +1
  palabras_filtradas.forEach((palabra) => {
    frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
  });
  //Retornamos la palabra que aparece mas en el texto 
  return Object.entries(frecuencia).reduce((max, actual) =>
    actual[1] > max[1] ? actual : max
  )[0];
}

console.log(palabra_mas_frecuente(texto, lista_a_ignorar));
