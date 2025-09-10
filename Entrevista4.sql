/*4.- Recaudación de eventos
 Una organizadora de eventos mantiene dos tablas, una con eventos, y una con entradas
 compradas para dichos eventos.
 Considerando las siguientes definiciones:
 evento(id, nombre)
 entradas(id, id_evento, fecha_compra, costo)
 Escriba una consulta SQL que entregue el nombre de cada evento y su recaudación. Ordene el
 resultado de mayor a menor recaudación. Notar que un evento para el */

 SELECT 
    ev.nombre AS Evento,
    SUM(en.costo) as Recaudación
FROM evento ev
INNER JOIN entradas en ON en.id_evento = ev.id
GROUP BY ev.id,ev.nombre
ORDER BY Recaudación desc ;