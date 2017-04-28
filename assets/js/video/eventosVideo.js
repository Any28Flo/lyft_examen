var agregaEventos = document.getElementsByClassName('videoPlayDerecha');
// agregaEventos[0].addEventListener("click",reproduceVideo);
[].forEach.call(agregaEventos, function(elemento,indice){
  elemento.addEventListener("click",reproduceVideo);
})
function reproduceVideo(){
  alert("hola");
}
