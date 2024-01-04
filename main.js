// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hideError = document.getElementById("modal-message");
hideError.className = "hidden";

const likeHearts = document.querySelectorAll(".like-glyph");
console.log(likeHearts);

for (const heart of likeHearts) {
  heart.addEventListener('click', likeCallback);
};

function likeCallback(event) {
  const heart = event.target;
  mimicServerCall()
  .then(function(serverMessage){
    alert("You notified the server!");
  })
  .catch(function(error) {
    alert("Something went wrong!");
  })
};



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
