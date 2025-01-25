function sendEmail() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validation: Check if all fields are filled
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting!");
    return;  // Stop further execution if validation fails
  }

  let parms = {
    name: name,
    email: email,
    message: message
  };

  // Send email if all fields are filled
  emailjs.send("service_wpf0y2y", "template_8j2x61f", parms)
    .then(function(response) {
      console.log('Email sent successfully! ', response);
      alert('Email sent successfully! I will get back to you later...😊');
    })
    .catch(function(error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    });
}
