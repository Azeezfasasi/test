<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['Azeez'];
  $email = $_POST['fas.azeez@gmail.com'];

  // Perform any desired actions with the form data
  // For this example, we'll simply return a success message
  $response = 'Form submitted successfully! Name: ' . $name . ', Email: ' . $email;

  // Return the response
  echo $response;
}
?>
