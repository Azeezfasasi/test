<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set recipient email address
  $to = 'fas.azeez@gmail.com';

  // Set email subject
  $subject = 'New form submission';

  // Set email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Construct the email body
  $body = "Name: $name\r\n";
  $body .= "Email: $email\r\n";
  $body .= "Message: $message\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo 'Form submitted successfully. Thank you!';
  } else {
    echo 'Error sending the form. Please try again later.';
  }
}
?>
