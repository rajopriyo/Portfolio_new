ScrollReveal({ reset: true });

ScrollReveal().reveal('header', {  
    duration: 2000,    
    delay: 100,
    origin: 'top' });


ScrollReveal().reveal("#home", {
  duration: 3000,
  origin: "top",
  distance: "400px"
  
});

ScrollReveal().reveal("#about", {
  duration: 5000,
  scale: 0.5
});
ScrollReveal().reveal("#skills", {
    duration: 5000,
    scale: 0.5
});

ScrollReveal().reveal("#achievements", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal("#projects", {
//   delay: 500,
  duration: 2000,
  scale: 0.85
//   rotate: {
//     x: 20,
//     z: 20
//   }
});

ScrollReveal().reveal("#education", {
  duration: 4000,
  scale: 0.85
});

// ScrollReveal().reveal("#contact", {
//   origin:"left",
//  duration: 5000,
//     scale: 0.5
// });

// function sendEmail()
// {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "rajopriyochanda2001@gmail.com",
//         Password : "Prince@2001",
//         To : 'rajopriyochanda2001@gmail.com',
//         From : document.getElementById("Email").value,
//         Subject : "New Connection",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// // {}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwWGrGceIHpx45W9Zn0TJFqKkpJP99moDmWCRMBBC69UHjuEV6LOvv5cVulb7OXA5U3/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
         msg.innerHTML= "Thank You !! I will reach you soon!! "
          setTimeout(function() {
              msg.innerHTML= ""},2500)
              form.reset();
    })    
    .catch(error => console.error('Error!', error.message))
  })
