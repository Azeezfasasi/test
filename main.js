// Get the form element
var form = document.getElementById('myForm');
// Get the result element
var result = document.getElementById('result');

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  // Create AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Handle response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      result.innerHTML = xhr.responseText;
    }
  };

  // Send form data
  xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email));
}

// Add event listener for form submission
form.addEventListener('submit', submitForm);
