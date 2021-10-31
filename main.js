// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.querySelectorAll('.like-glyph').forEach(button => {
  button.addEventListener('click', handleLike)
})

function handleLike(e) {
  const serverAnswer = mimicServerCall();
  serverAnswer.then((reply) => {
    const obj = e.target;
    if(obj.textContent === EMPTY_HEART) {
      obj.setAttribute('class', 'like-glyph activated-heart');
      obj.textContent = FULL_HEART;
    } else {
      obj.setAttribute('class', 'like-glyph');
      obj.textContent = EMPTY_HEART;
    }
  })
  serverAnswer.catch((reply) => {
    document.getElementById('modal').removeAttribute('class');
    document.getElementById('modal-message').textContent = reply;
    setTimeout(() => {
      document.getElementById('modal').setAttribute('class', 'hidden');
    }, 3000)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
