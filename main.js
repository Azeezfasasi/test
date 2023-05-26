// Get the form element
var form = document.getElementById('myForm');

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Create a FormData object to store the form data
  var formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php', true);

  // Set up the onload function
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Error submitting the form. Please try again later.');
    }
  };

  // Send the request
  xhr.send(formData);
}

// Add event listener for form submission
form.addEventListener('submit', submitForm);
