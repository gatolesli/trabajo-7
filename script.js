importar   "./styles.css"  ;

documento  .  getElementById  (  "aplicación"  )  .  innerHTML   =   `
<h1> Pregunta saber 11 </h1>
<div>
"¿Que jugador de futbool tiene mas balones de oro"?
 <br> A = Leonel Messi.
 <br> B = Cristiano Ronaldo.
 <br> C = Kevin De Bruine.
 <br> D = Iniesta.
<br>
</div>
`  ;

función  ingresarrespuesta  (  )  {
  dejar   respuesta   =   documento  .  getElementById  (  "input_pregunta"  )  .  valor  ;
  if   (  respuesta   ===   "B"  )   {
    alert  (  "Respuesta correcta"  )  ;
  }   más  {
    alert  (  "Respuesta incorrecta"  )  ;
  }
}

documento
  .  getElementById  (  "btn_pregunta"  )
  .  addEventListener  (  "clic"  ,   ingresarrespuesta  )  ;
