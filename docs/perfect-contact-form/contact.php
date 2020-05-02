<?php  

	// Perfect Contact Form

	// Getting Request From Form 
$name 		= (isset($_REQUEST['name']))?(string)$_REQUEST['name']:'';
$email 		= (isset($_REQUEST['email']))?(string)$_REQUEST['email']:'';
$phone 		= (isset($_REQUEST['phone']))?(string)$_REQUEST['phone']:'';
$message 	= (isset($_REQUEST['message']))?(string)$_REQUEST['message']:'';
$subject 	= (isset($_REQUEST['subject']))?(string)$_REQUEST['subject']:'';
$mail_type 	= (isset($_REQUEST['mail_type']))?(string)$_REQUEST['mail_type']:'';


if($mail_type == 'simple_mail'){
	echo  simpleContact($email, $subject, $name, $phone, $message);
}

if($mail_type == 'smtp_mail'){
	echo  smtpContact($email, $subject, $name, $phone, $message);
}

	// Contact US (PHP Default Mail)
function simpleContact($to, $subject, $name, $phone, $message){
	$response = array();
	if(!empty($to)){
					// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		$YourName = 'Información FLIP';
		$YourEmail = 'info@flip.org.co';

					// Additional headers
		$headers .= 'To: '.$YourName.' <'. $YourEmail. '>' . "\r\n";
		$headers .= 'From: ' . ucwords($name) . ' <'. $to. '>' . "\r\n";
		$headers .= 'Cc: museovirtualflip@gmail.com' . "\r\n";
					//$headers .= 'Bcc: bcc@xyz.com' . "\r\n";
		$message 	= 	'<div  style="background:#F5F5F5; padding:10px;">
		<p>'.$message.'</p><br />
		<div>Name : '.$name.'</div><br />
		<div>Phone : '.$phone.'</div><br />
		</div>';
		mail($YourEmail, $subject, $message, $headers);
		$response['success'] = 'Your email has been sent successfully.';

	}else{
		$response['error'] = 'Something not right. Please check your details.';
	}
	echo json_encode($response, JSON_PRETTY_PRINT);
}/*...ends[contactus]...*/


function smtpContact($to, $subject, $name, $phone, $message){
	require_once 'PHPMailer/PHPMailerAutoload.php';
	$response = array();
			//Create a new PHPMailer instance
	$mail = new PHPMailer;
	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587;
	$mail->SMTPAuth = true;
	$mail->Username = "museovirtualflip@gmail.com";
	$mail->Password = "__________________";
	$mail->setFrom($to, $name);
	$mail->addAddress('museovirtualflip@gmail.com', 'Información FLIP');
	$mail->Subject = $subject;
	$message = 	'<div  style="background:#F5F5F5; padding:10px;">
	<p>'.$message.'</p><br />
	<div>Nombre : '.$name.'</div><br />
	<div>Teléfono : '.$phone.'</div><br />
	</div>';
	$mail->msgHTML($message);
	$mail->AltBody = 'Mensaje';
	$mail->SMTPOptions = array(
		'ssl' => array(
			'verify_peer' => false,
			'verify_peer_name' => false,
			'allow_self_signed' => true
		)
	); 
	if (!$mail->send()){
			// For Debugging
			//return "Mailer Error: " . $mail->ErrorInfo;
		$response['error'] = 'Something not right. Please check your details.';
	}else{
		$response['success'] = 'Your email has been sent successfully.';
	}
	echo json_encode($response, JSON_PRETTY_PRINT);
}/*...ends[contactus]...*/
?>