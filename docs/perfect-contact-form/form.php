<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>Perfect Contact Us Form</title>

	<!-- Bootstrap -->
	<link href="asset/css/bootstrap.min.css" rel="stylesheet">
	<link href="asset/css/perfect-contact-form.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <style>
	  .form-control{
		background-color: rgba(255,255,255,0.1);
		border: 1px solid transparent;
    border-radius: 0;
	  }
	  .btn-success {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
}
.btn-success:hover {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    text-decoration: underline;
}
textarea.form-control {
    color: #ffffff;
}
input.form-control{
	color: #ffffff;
}
select.form-control.valid {
    color: #ffffff;
}
	</style>
</head>
<body>
	<!--BEGIN CONTAINER -->
	<div class="container container-alignment" > 
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-body">
						<div id="response"></div>
						<form class="form-horizontal"  id="perfect-contact-form" autocomplete="off">
							<div class="form-group">
								<div class="col-sm-6">
									<input type="text" name="name" class="form-control bottom-space"  placeholder="Nombre">
								</div>
								<div class="col-sm-6">
									<input type="email" name="email" class="form-control" placeholder="Email">
								</div>
							</div><!-- end div .form-group-->
							<div class="form-group">
								<div class="col-sm-6">
									<input type="tel" name="phone" class="form-control bottom-space" placeholder="Teléfono">
								</div>
								<div class="col-sm-6">
									<select class="form-control" name="subject" >
										<option value="Sales">Quiero comaprtir una memoria</option>
										<option value="Feature">Tengo una duda</option>
									</select>
								</div>
							</div><!-- end div .form-group-->
							<div class="form-group">
								<div class="col-sm-12">
									<textarea  class="form-control" name="message" id="quick-acf-message"  placeholder="mensaje" rows="6"></textarea>
								</div>
							</div><!-- end div .form-group-->
							<div class="form-group">
								<div class="col-sm-6 text-alignment captcha" style="color: #fff"></div>
								<div class="col-sm-6">
									<input type="tel" name="captcha" class="form-control" placeholder="Respuesta">
								</div>
							</div><!-- end div .form-group-->
							<div class="form-group">
								<div class="col-sm-2 col-lg-2 col-xs-12">
									<input type="hidden" name="mail_type" value="smtp_mail" />
									<button type="submit" class="btn btn-block btn-success">Enviar</button>
								</div>
							</div><!-- end div .form-group-->
						</form><!-- end form-->
					</div><!-- end div .panel-body-->
				</div><!-- end div .panel-->
			</div><!-- end div .col-md-8-->
		</div><!-- end div .row-->
	</div>
	<!--END CONTAINER-->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="asset/js/jquery.min.js"></script>

	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="asset/js/bootstrap.min.js"></script>
	<script src="asset/js/jquery.validate.js"></script>
	<script src="asset/js/additional-methods.js"></script>
	<script src="asset/js/perfect-contact-form.js"></script>
	
</body>
</html>