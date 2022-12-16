const errorModal = document.getElementById('modal')
errorModal.classList.add("hidden")
const errorMessage = document.getElementById('modal-message')
const heartSpan = document.querySelector('.like-glyph')
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
heartSpan.addEventListener('click', () =>{
  mimicServerCall()
  .then(() => {
    if(heartSpan.innerHTML === FULL_HEART){
      heartSpan.innerHTML = EMPTY_HEART
      heartSpan.classList.remove('activated-heart')
    } else {    
    heartSpan.innerHTML = FULL_HEART
    heartSpan.classList.add('activated-heart')}
  })
  .catch(error => {
    errorModal.classList.remove('hidden')
    errorMessage.innerHTML = error
    setTimeout(() =>{errorModal.classList.add('hidden')},3000)
  })
});



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
