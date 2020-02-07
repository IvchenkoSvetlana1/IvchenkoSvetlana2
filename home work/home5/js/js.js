-
// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

 jQuery('#my-form').validate({
         rules: {
                      name: {
						  required:true
						},
                      tel: {
                          required: true
						},
					  company: {
                          required: true
						}
						
                },
                  messages: {
                      name: {
					     required: "Enter your Name"
					  },
                      tel: {
					     required: "Enter your phone number"
					 },
					 company: {
					     required: "Enter your Company name"
					 }
					 
                  },
         submitHandler: function(form){			
  
  var name = jQuery('#my-form').find('input[name="name"]').val();
  var tel = jQuery('#my-form').find('input[name="tel"]').val();
  var company = jQuery('#my-form').find('input[name="company"]').val();
  
  
  jQuery.post(
  "/contact.php",
  {
  name: name,
  tel: tel,
  company: company
  
  }),
    jQuery('#my-form input[type="text"]').val('');
	jQuery('#my-form input[type="tel"]').val('');
	jQuery('#my-form input[type="company"]').val('');
	
         } 
      });
});	



