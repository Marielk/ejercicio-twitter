

const button = document.getElementById('tweetButton');
button.disabled = true;
let userTextInput = document.getElementById('userComment');
userTextInput.addEventListener ( 'keypress', () => {
  button.disabled = false;
})
let userTextInput2 = document.getElementById('userComment');
userTextInput2.addEventListener ('keypress', () => {
  const max = '140'; 
  let cadena = document.getElementById("userComment").value; 
  let longitud = cadena.length; 
    if(longitud <= max) { 
      document.getElementById('contador').value = max-longitud; 
    } else { 
      document.getElementById('contador').value = -(longitud-max);
    } 
})

let texto = document.getElementById('userComment'); 

texto.addEventListener ( 'keypress' , () => {
  let cadena = document.getElementById("userComment").value; 
  let longitud = cadena.length; 
  if (longitud <= 140 && longitud >= 0 ) { button.disabled = false; } else { button.disabled = true; }
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

  