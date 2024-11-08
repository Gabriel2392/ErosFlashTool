$(function(){
	'use strict';
	
	$('html').removeClass('no-js').addClass('js');
	
	/*=========================================================================
		Initialize fitVids
	=========================================================================*/
	$('.video-container').fitVids();
	
	/*=========================================================================
		Menu Functioning
	=========================================================================*/
	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	});
	
	$('.menu > ul > li > a').on('click', function(){
		var $offset = $( $(this).attr('href') ).offset().top;
		$('body, html').animate({
			scrollTop: $offset
		}, 700);
		$('body').removeClass('show-menu');
	});
	
	
	
	$(window).on('load', function(){
		
		$('body').addClass('loaded');
		
	});
	
	/*=========================================================================
		Screenshots popup box
	=========================================================================*/
	$('.screenshots-slider li > .inner > .overlay > a').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	
	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		items: 1,
		autoplay: true,
		autoplaySpeed: 1000
	});
	
	/*=========================================================================
		Screenshots Slider
	=========================================================================*/
	$('.screenshots-slider').owlCarousel({
		items: 4,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: {
			1024: {
				items: 4
			},
			992: {
				items: 3 
			},
			768: {
				items: 2
			},
			0: {
				items: 1
			}
		}
	});
	
	
	
	/*=========================================================================
		Contact Form
	=========================================================================*/
	function isJSON(val){
		var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	}
	$('#contact-form').validator().on('submit', function (e) {
		
		if (!e.isDefaultPrevented()) {
			// If there is no any error in validation then send the message
			
			e.preventDefault();
			var $this = $(this),
				
				//You can edit alerts here
				alerts = {
				
					success: 
					"<div class='form-group' >\
						<div class='alert alert-success' role='alert'> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",
					
					
					error: 
					"<div class='form-group' >\
						<div class='alert alert-danger' role='alert'> \
							<strong>Oops!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"
					
				};
			
			$.ajax({
			
				url: 'mail.php',
				type: 'post',
				data: $this.serialize(),
				success: function(data){
					
					if( isJSON(data) ){
						
						data = $.parseJSON(data);
						
						if(data['error'] == false){
							
							$('#contact-form-result').html(alerts.success);
							
							$('#contact-form').trigger('reset');
							
						}else{
							
							$('#contact-form-result').html(
							"<div class='form-group' >\
								<div class='alert alert-danger alert-dismissible' role='alert'> \
									<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
										<i class='ion-ios-close-empty' ></i> \
									</button> \
									"+ data['error'] +"\
								</div>\
							</div>"
							);
							
						}
						
						
					}else{
						$('#contact-form-result').html(alerts.error);
					}
					
				},
				error: function(){
					$('#contact-form-result').html(alerts.error);
				}
			});
		}
	});
	
	
});