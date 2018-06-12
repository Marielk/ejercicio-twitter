

const button = document.getElementById('tweetButton');
button.disabled = true;
let userTextInput = document.getElementById('userComment');
userTextInput.addEventListener ( 'keypress', () => {
  button.disabled = false;
})
let userTextInput2 = document.getElementById('userComment');
userTextInput2.addEventListener ('keypress', () => {
  const max = "150"; 
  let cadena = document.getElementById("userComment").value; 
  let longitud = cadena.length; 
    if(longitud <= max) { 
      document.getElementById("contador").value = max-longitud; 
    } else { 
      document.getElementById("userComment").value = cadena.substr(0, max);
    } 

})

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

  