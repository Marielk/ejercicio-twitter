const button = document.getElementById('tweetButton');
button.addEventListener('click', () => {
  let userText = document.getElementById('userComment').value;
  document.getElementById('userComment').value = ' '; 

  const showCommentDiv = document.getElementById('showComments');

  const newComments = document.createElement('div');

  if (userText.length === 0 || userText === null) {
    alert('Debes ingresar un mensaje');
    return false; 
  }

  let newTextComments = document.createTextNode(userText);

  const contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(newTextComments);
  newComments.appendChild(contenedorElemento);
  showCommentDiv.appendChild(newComments);

})