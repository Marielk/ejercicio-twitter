/*
let camposValidos = document.getElementById('userComment').value;
const botonTweet = document.getElementById('tweetButton');
if (camposValidos === 0 || camposValidos === null) {
  botontweet.disabled = true;
}
else {
  botonTweet.disabled = false;
} */

const button = document.getElementById('tweetButton');
button.disabled = true;
let userText = document.getElementById('userComment').value;
if (userText.length != 0 || userText != null) {
  button.disabled = false;
} else { button.disabled = true; }

button.addEventListener('click', () => {
  let userText = document.getElementById('userComment').value;
  document.getElementById('userComment').value = ' '; 

  const showCommentDiv = document.getElementById('showComments');

  const newComments = document.createElement('div');

  let newTextComments = document.createTextNode(userText);
  
  const contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(newTextComments);
  newComments.appendChild(contenedorElemento);
  showCommentDiv.appendChild(newComments); 

})
/*
boton.disabled = false;
    else boton.disabled = true;
    
    if (userText.length === 0 || userText === null) {
      alert('Debes ingresar un mensaje');
      return false; 
    } */ 
  