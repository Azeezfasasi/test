<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];

  // Perform any desired actions with the form data
  // For this example, we'll simply return a success message
  $response = 'Form submitted successfully! Name: ' . $name . ', Email: ' . $email;

  // Return the response
  echo $response;
}
?>
