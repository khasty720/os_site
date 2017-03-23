
<?php
  /*
  //if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

    //Email information
    $admin_email = "khasty1@jhu.edu";
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $comment = $_REQUEST['comment'];

    $body = "Subject: {$subject} Email: {$email} Comment: {$comment}";
    //send email
    mail($admin_email, "OS Designs", $body, "From: no-reply@osdesigns.co.uk");

    //Email response
    //echo "<p>Thank you for contacting us! Your message has been sent.</p>";
  }
  */
?>

<?php
  $admin_email = "khasty1@jhu.edu";
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $comment = $_POST['comment'];
  mail($admin_email, "OS Designs", $body, "From: no-reply@osdesigns.co.uk") or die("Error!");

  echo "<p>Thank you for contacting us! Your message has been sent.</p>";
?>
