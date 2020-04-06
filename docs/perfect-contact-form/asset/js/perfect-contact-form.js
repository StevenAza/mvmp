$(document).ready(function () {
	var captchaOne = randomNumber(10,15);
	var captchaTwo = randomNumber(1,9);
	var captachValue = captchaOne + captchaTwo;
	$('.captcha').append('<b>'+captchaOne+' + '+captchaTwo+' = </b>');
	$('#perfect-contact-form').validate({ 
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				number: true
			},
			message: {
				required: true
			},
			captcha: {
				required: true, 
				captchaValidation: [captachValue]
			}
		},
		submitHandler: function(form){
			$.ajax({
				url: 'http://memoriasdelperiodismo.co/perfect-contact-form/contact.php',
				type: form.method,
				data: $(form).serialize(),
				dataType:"json",
				success: function(response) {
					$('.alert').remove();
					if(response.success){
						$('#response').append('<div class="alert alert-success fade in alert-dismissable"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Success!</strong> '+response.success+'</div>');
						// To Blank the form after email send
						$('#perfect-contact-form').find("input[type=text], input[type=email], input[type=tel], textarea").val("");

					}
					if(response.error){
						$('#response').append('<div class="alert alert-danger fade in alert-dismissable"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Oops!</strong> '+response.error+'</div>');
					}
				}            
			}); 
			return false;
		}
	});
	function randomNumber(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	$.validator.addMethod("captchaValidation", function(value, element, param) {	
		return value == param;
	}, "Sorry your answer is not correct.");
});


