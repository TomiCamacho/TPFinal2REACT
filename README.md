# README: Trabajo Práctico Final Nº2 | UTN Argentina

🔹 Este trabajo consistió en <strong>agregarle funcionalidad</strong> al primer trabajo [TPF1](https://github.com/TomiCamacho/Trabajo-Final-1) que había sido creado con HTML y CSS puro. <br>

🔹 Ahora utilizamos ⚛️ <strong>REACT</strong> y distintas bibliotecas para mejorar lo que habíamos hecho antes. <br>

🔹 El diseño con el que trabajé fue: [Diseño en Dribbble](https://dribbble.com/shots/20825675-Portfolio-Personal-Website-Portfolio) <br>

🔹 <strong>Deploy en Vercel: [Mi página web](https://tp-final2.vercel.app/)</strong>

<br>


## Contenidos

#️⃣ Header + Menú <br>

#️⃣ Hero <br>

#️⃣ About me <br>

#️⃣ Servicios <br>

#️⃣ Proyectos <br>

#️⃣ Testimonios <br>

#️⃣ Contacto <br>

#️⃣ Footer


<br>


## Frameworks

🟣 <strong>Chakra-UI</strong> <br>

🟣 <strong>Framer Motion</strong> <br>

🟣 <strong>Formik</strong> <br>

🟣 <strong>Yup</strong>

<br>

## Qué se agregó

✅ <strong>Menú desplegable interactivo</strong> <br>

✅ <strong>Animación del botón 'Contáctame' del Hero con desplazamiento hacia la sección Contacto</strong> <br>

✅ <strong>Sección TESTIMONIOS:</strong> la agregué en un principio para hacer un carrusel, ya que quería sumar elementos a la página que requieran funcionalidad. Luego vimos en clase que hoy no es lo más conveniente hacer un carrusel en una sección tan importante como la de Testimonios, por lo que la dejé sin funcionalidad.<br>

✅ <strong>Validación del Formulario:</strong> usé Formik para la construcción y el manejo de onSubmit y onChange, y Yup para la validación de los campos.<br>

✅ <strong>Modal:</strong> Utilicé un modal propio de Chakra para confirmar el envío del formulario. Pronto lo reemplazaré por una redirección a otra página de agradecimiento. 

<br>

## Correcciones al último trabajo

✔️ Subrayado con espaciado corregido en los links 'Ver Proyecto' <br>

✔️ Se separaron los placeholders respecto al borde de los input (venía por defecto en las etiquetas propias de Chakra) <br>

✔️ Se corrigieron algunos paddings superiores e inferiores en algunas secciones a la hora de variar el ancho de la pantalla. <br>

<br>

## Responsive

Para que la página sea responsiva utilicé <strong>Chakra</strong>. Antes, configuré los breakpoints que trae predefinidos y los cambié por los del primer Trabajo Práctico:

320px,<br>
480px,<br>
768px,<br>
1024px,<br>
1280px,<br>
1440px,<br>
1920px

Todas estas medidas del ancho de pantalla fueron configuradas en base a una <strong>altura fija: 768px</strong>.

Utilicé el método "Array" para configurar cada etiqueta responsiva, el cual se explica en la documentación de Chakra Responsive Styles.
