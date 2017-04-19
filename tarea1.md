MTI 2016 
Bastian Carvajal Y
bastian.carvajal@sansano.usm.cl



## Enunciado

“Se desea desarrollar la infraestructura de un portal Web de compra/venta de instrumentos musicales llamado QUENA. El portal dispone de una serie de establecimientos asociados repartidos a nivel mundial así como productos de dichas regiones que se desea vender a través de Internet. El portal Web gestionará la información de cada establecimiento así como los productos disponibles en cada una de ellos.”

Las tareas a realizar serán:

1. Representación de la información. 

1.1. Representar la información de los establecimientos, los productos y sus características, precios, disponibilidad, etc. en ficheros XML y JSON. No es necesario representar toda la información en un único fichero XML/Json, si no que pueden utilizarse varios.
1.2. Crear vocabularios mediante DTD, XML Schema para validar los ficheros XML de la sección anterior. Opcionalmente, crear ficheros JSON Schema para validar la representación Json.
1.3. Realizar una comparación entre el formato XML y el formato JSON, indicando las ventajas e inconvenientes de cada uno de ellos. Incluir una comparación entre las capacidades expresivas de los lenguajes de esquema para XML y los lenguajes de esquema para JSON.

2. Aplicación Web. 

2.1. Crear un servicio Web REST para gestionar la información de los establecimientos, así como de los productos disponibles.
2.2. El servicio Web deberá devolver la información de los establecimientos en los formatos XML, JSON y HTML. Puede realizarse mediante URIs diferentes o mediante negociación de contenido. Documentar brevemente el servicio Web creado, los métodos y la forma de invocarlos (se recomienda la utilización de Swagger para la documentación). Crear una aplicación Web cliente del servicio Web anterior.
2.3. Realizar una valoración de la solución comparando el framework NodeJs con otros frameworks Web. Analizar posibles soluciones para desplegar el sistema desarrollado: servidores locales, servidores en la nube, microservicios, etc. teniendo en cuenta diversos aspectos: precio, disponibilidad, escalabilidad, etc.

3. Web Semántica

3.1. Representar la información de establecimientos y productos musicales de la primer tarea en formato RDF. Opcionalmente, se podrá utilizar ShEx o SHACL para validar los ficheros creados (una posible herramienta sería para la validación sería RDFShape o Shaclex).
3.2. Existen 2 tecnologías que permiten incorporar metadatos en páginas Web: microdatos y RDFa. Enriquecer las páginas Web de establecimientos y productos musicales con microdatos ó con RDFa para que sus contenidos puedan ser indexados por buscadores. Utilizar para ello elementos del vocabulario Schema.org.
3.3. Analizar la solución presentada, así como las ventajas e inconvenientes de enriquecer portales Web con tecnologías semánticas. Este análisis puede llevarse a cabo utilizando uno o más casos de uso propuestos por los estudiantes. Se valorarán casos de uso reales o en los que los estudiantes tengan experiencia previa.


### Desarrollo


#### 1.1 y 1.2 

Para representar la información de establecimientos, productos, etc., se realizo el siguiente diagrama de clases.

[diagrama en png](/path/to/imagen) 

La representacion en **xml** se divide en dos archivos, el primero incluye la definicion del dtd para validar el documento, y el seguno que tiene separado el archivo xsd para validar a traves de xml schema:

- dtd
  - [store1.xml](/parte1/xml/store1.xml)
- xml schema
  - [store2.xml](/parte1/xml/store2.xml)
  - [store2.xsd](/parte1/xml/store2.xsd)

Para validar estos archivos se utiliza `xmllint` en un entorno linux. Los siguientes comandos se pueden ejecutar en el directorio `/parte1/xml/`.

```
# Es válido si no retorna ningun mensaje.
xmllint --valid store1.xml --noout

# Es válido si retorna "store2.xml validates"
xmllint --schema store2.xsd --noout store2.xml

```

La representacion en **json** tiene algunas variaciones respecto de la anterior. Igualmente se valida a traves de json schema.

- [store.json](/parte1/json/store.json)
- [store.schema.json](/parte1/json/store.schema.json)

Se creo un script en nodejs para validar este archivo. Los siguientes comandos se pueden ejecutar en el directorio `/parte1/json/`.

```
# instalar dependencias (probado con node v4.8.1 y npm v4.4.4)
npm install

# Es válido si no retorna ningun mensaje.
node validator.js store.json store.schema.json

```


#### 1.3

Según lo experimentado en el desarrollo del ejercicio anterior, claras diferencias existen entre los formatos **XML** y **JSON**...   

Las capacidades expresivas entre XML y JSON...


#### 2.1 y 2.2 

Todo...


#### 2.3

Comparacion entre framework **NodeJs** con otros frameworks Web...   

Posibles soluciones para desplegar el sistema desarrollado...


#### 3.1

RDF en primer ejercicio...


#### 3.2

RDFa en api del segundo ejercicio...


#### 3.3

Analisis de las ventajas e inconvenientes de enriquecer portales Web con tecnologías semánticas...


